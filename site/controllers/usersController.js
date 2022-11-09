const fs = require("fs");
const path = require("path");
/* let usuarios = require("../data/usuarios.json"); */
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
const usuarios = require("../database/models/usuarios");
const { literal } = require("sequelize");
const { log } = require("console");
/* const guardar = (dato) =>
  fs.writeFileSync(
    path.join(__dirname, "../data/usuarios.json"),
    JSON.stringify(dato, null, 4),
    "utf-8"
  );

const guardarU = (dato) =>
  fs.writeFileSync(
    path.join(__dirname, "../data/usuarios.json"),
    JSON.stringify(dato, null, 4),
    "utf-8"
  ); */

module.exports = {
  register: (req, res) => {
    return res.render("register");
  },
  newUser: (req, res) => {
    let errors = validationResult(req);
    if (req.fileValidationError) {
      let imagen = {
        param: "imagen",
        msg: req.fileValidationError,
      };
      errors.errors.push(imagen);
    }
    if (errors.isEmpty()) {
      /* return res.send(req.body) */
      let { nombre, apellido, email, contrasenia } = req.body;

      db.Usuarios.create({
        nombre,
        apellido,
        direccion: "",
        telefono: "",
        email,
        contrasenia: bcrypt.hashSync(contrasenia, 12),
        imagen: req.file.size > 1 ? req.file.filename : "avatar-porDefecto.png",
        rolId: 2,
      })

        .then((usuario) => {
          req.session.userLogin = {
            id: usuario.id,
            nombre: usuario.nombre,
            imagen: usuario.imagen,
            rol: usuario.rolId,
          };
          return res.redirect("/");
        })
        .catch((errores) => res.send(errores));
    } else {
      let ruta = (dato) =>
        fs.existsSync(
          path.join(__dirname, "..", "..", "public", "images", "users", dato)
        );

      if (
        ruta(req.file.filename) &&
        req.file.filename !== "default-image.png"
      ) {
        fs.unlinkSync(
          path.join(__dirname,"..","..","public","images","users",req.file.filename
          )
        );
      }

      /* return res.send(errors.mapped()) */
      return res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,
      });

      //----------------------------------------//

      /* let { nombre, apellido, email, contrasenia } = req.body;

      let nuevoUsuario = {
        id: usuarios[usuarios.length - 1].id + 1,
        nombre,
        apellido,
        direccion: "",
        telefono: "",
        email,
        contrasenia: bcrypt.hashSync(contrasenia, 12),
        imagen: req.file.size > 1 ? req.file.filename : "avatar-porDefecto.png",
        rol: "usuario",
      };

      usuarios.push(nuevoUsuario);
      guardar(usuarios); */

      /* if (recordarme) {
            res.cookie("SoundSurge", req.session.userLogin, {
              maxAge: 1000 * 60 * 60,
            });
            res.redirect("/");
          } else { */

      /* Redirecciona a login */
      /* return res.send(errors.mapped()) */
      /* return res.render("register", {
              errors: errors.mapped(),
              old: req.body,
            });
          }
        }); */
    }
  },
  login: (req, res) => {
    return res.render("login");
  },
  perfil: (req, res) => {
    return res.render("perfil");
  },
  inLogin: (req, res) => {
    let errors = validationResult(req);
    /* return res.send(errors) */
    if (errors.isEmpty()) {
      const { email, recordarme } = req.body;
      /* let usuario = usuarios.find((user) => user.email === email);
/* 
      req.session.userLogin = {
        id: usuario.id,
        nombre: usuario.nombre,
        imagen: usuario.imagen,
        rol: usuario.rol,
      } */

      db.Usuarios.findOne({
        where: {
          email,
        },
      })
        .then((usuario) => {
          usuario = usuario.dataValues;

          req.session.userLogin = {
            id: usuario.id,
            nombre: usuario.nombre,
            imagen: usuario.imagen,
            rol: usuario.rolId,
          };
          if (recordarme) {
            res.cookie("SoundSurge", req.session.userLogin, {
              maxAge: 1000 * 60 * 60,
            });
          }
          return res.redirect("/users/perfil");
        })
        .catch((error) => {
          return res.send(error);
        });
    } else {
      /*       return res.send(errors.mapped())
       */ return res.render("login", {
      errors: errors.mapped(),
      old: req.body,
    });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.SoundSurge) {
      res.cookie("SoundSurge", "", { maxAge: -1 });
    }
    return res.redirect("/");
  },
  editarU: (req, res) => {
    let idParams = req.params.id;
    db.Usuarios.findByPk(idParams).then((usuario) => {
      /* return res.send(usuario) */
      return res.render("editarUsuario", { usuario });
    });
  },
  editarUsuario: (req, res) => {
    /* return res.send(req.body) */

    let errors = validationResult(req)

    if (errors.isEmpty()) {

        const {nombre, apellido, direccion, telefono } = req.body

        db.Usuarios.findOne({
            id: +req.params.id
        })
        .then(user => {
            db.Usuarios.update({
              nombre: nombre.trim(),
              apellido: apellido.trim(),
              direccion: direccion,
              telefono: telefono,
              imagen: req.file ? req.file.filename : user.imagen
            },{
                where: {
                    id: +req.params.id
                }
            })
            .then(data=> {
                db.Usuarios.findOne({
                    id: +req.params.id
                })
                .then(usuario => { 
                    
                    req.session.userLogin = {
                      id: usuario.id,
                      nombre: usuario.nombre,
                      imagen: usuario.imagen,
                      rol: usuario.rolId,
                    }
                    if(req.cookies.SoundSurge){
                        res.cookie('SoundSurge','',{maxAge: -1});
                        res.cookie('SoundSurge', req.session.userLogin, {maxAge: 1000 * 60 * 60 * 24})
                    }
                    req.session.save( (err) => {
                        req.session.reload((err) => {
                            return res.redirect('/users/perfil')
        
                        });
                     });
        
                })
                
            }).catch(err => res.send(err))

        })
        .catch(err => res.send(err))

    } else {

    }
},
  eliminarUsuario : (req,res) => {
    req.session.destroy();
    if (req.cookies.SoundSurge) {
      res.cookie("SoundSurge", "", { maxAge: -1 });
    }
    let idParams = req.params.id;
   
    db.Usuarios.destroy(
      {
        where:{id: idParams}
      })
      return res.redirect("/") 
}
}
