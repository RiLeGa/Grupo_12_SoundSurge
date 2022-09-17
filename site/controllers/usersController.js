const fs = require('fs')
const path = require('path')
let usuarios = require('../data/usuarios.json')
const { validationResult } = require('express-validator')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/usuarios.json')
,JSON.stringify(dato,null,4),'utf-8')

const guardarU = (dato) => fs.writeFileSync(path.join(__dirname, '../data/usuarios.json')
,JSON.stringify(dato,null,4),'utf-8')

module.exports = {

    register : (req,res) => {
        return res.render('register',{
            req
        });
    },
    newUser:(req,res) => {
        
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {

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

    } else {

            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', 'users', dato))
            if (ruta(req.file.filename) && (req.file.filename !== "default-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'images', 'users', req.file.filename))
            }
            
            /* return res.send(errors.mapped()) */
            return res.render('users/register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login : (req,res) => {
        return res.render('login');
    },
    editarUsuario : (req,res) => {
        return res.render('perfilDeUsuario', {
            usuarios
        });
    },
    actualizarUsuario:(req,res) => {
        idParams = +req.params.id
        let {nombre, apellido, direccion, telefono, email, imagenes} = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.nombre = nombre
                producto.apellido = apellido
                producto.direccion = direccion
                producto.direccion = +telefono
                producto.email = +email
                producto.imagenes = imagenes
            }
        })

        guardarU(usuarios)

        return res.redirect('/')

        /* return res.send(req.body) */
    },
    buscar : (req,res) =>{
        return res.render('');
    }
}
