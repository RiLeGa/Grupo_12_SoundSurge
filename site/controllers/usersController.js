const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

module.exports = {
  register: (req, res) => {
    return res.render("register");
  },
  newUser: (req, res) => {
        /* return res.send(req.body) */
    let errors = validationResult(req)
    if (req.fileValidationError) {
        let imagen = {
            param: 'imagen',
            msg: req.fileValidationError,
        }
        errors.errors.push(imagen)
    }
    if (errors.isEmpty()) {

      let { nombre, apellido, email, contrasenia } = req.body;

        db.Usuarios.create({
        nombre,
        apellido,
        direccion: "",
        telefono: "",
        email,
        contrasenia: bcrypt.hashSync(contrasenia, 12),
        rolId: 2,
        imagen: req.file ? req.file.filename : 'default-image-user.jpg'
        })
        .then(usuario => {
                
          req.session.userLogin = {
              id : usuario.id,
              nombre : usuario.nombre,
              imagen : usuario.imagen,
              rol : usuario.rolId
          }

          return res.redirect('/')
      })
      .catch(errores => res.send(errores));
          
  } else {
            
      return res.render('register', {
          errors: errors.mapped(),
          old: req.body
      })
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
        .then(usuario => {
            db.Usuarios.update({
              nombre: nombre,
              apellido: apellido,
              direccion: direccion,
              telefono: telefono,
              /* imagen: req.file ? req.file.filename : usuario.imagen */
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
