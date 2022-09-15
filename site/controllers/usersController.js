const fs = require('fs')
const path = require('path')
let usuarios = require('../data/usuarios.json')
const { validationResult } = require('express-validator')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/usuarios.json')
,JSON.stringify(dato,null,4),'utf-8')


module.exports = {
    login : (req,res) => {
        return res.render('login');
    },

    register : (req,res) => {
        return res.render('register');
    },
    newUser:(req,res) => {
        

        let {nombre, apellido, direccion, telefono, email, contraseña} = req.body
        
        let nuevoUsuario = {
            id: usuarios[usuarios.length - 1].id + 1,
            nombre,
            apellido,
            direccion,
            telefono:+telefono,
            email,
            contraseña,
            imagen: req.file.size > 1 ? req.file.filename : "avatar-porDefecto.png"
        }
        

        usuarios.push(nuevoUsuario)
        guardar(usuarios)

        return res.redirect('/users/login')

        /* Redirecciona a login */
       
        /* Redirecciona al detalle del usuario recien creado */
        /* return res.send(req.body) */
    },
    buscar : (req,res) =>{
        return res.render('');
    }
}
