const fs = require("fs");
const path = require("path");
/* let usuarios = require("../data/usuarios.json"); */
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
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
      /* return res.send(req.body)*/

      let { nombre, apellido, email, contrasenia } = req.body;

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
      guardar(usuarios);

      const { recordarme } = req.body;
      usuarios = usuarios.find((user) => user.email === email);
      req.session.userLogin = {
        id: usuarios.id,
        nombre: usuarios.nombre,
        imagen: usuarios.imagen,
        rol: usuarios.rol,
      };
      if (recordarme) {
        res.cookie("SoundSurge", req.session.userLogin, {
          maxAge: 1000 * 60 * 60,
        });
      }

      /* Redirecciona a login */
      return res.redirect("/");
    } else {
      /* return res.send(errors.mapped()) */
      return res.render("register", {
        errors: errors.mapped(),
        old: req.body,
      });
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
      }).then((usuario) => {
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
        return res.send(error)
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
  editarUsuario: (req, res) => {
    idParams = +req.params.session.userLogin;
    let { nombre, apellido, direccion, telefono, email, imagenes } = req.body;

    userLogin.forEach((usuario) => {
      if (usuario.id === idParams) {
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.direccion = direccion;
        usuario.direccion = +telefono;
        usuario.email = +email;
        usuario.imagenes = imagenes;
      }
    });

    guardarU(usuarios);

    return res.redirect("/");

    /* return res.send(req.body) */
  },
  buscar: (req, res) => {
    return res.render("");
  },
};
