const {check, body} = require('express-validator')
/* const usuarios = require('../data/usuarios.json') */
const bcryptjs = require('bcryptjs')
const db = require('../database/models')

module.exports = [
    /* Email */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),

    /* Contraseña */
    check('contrasenia').trim()
    .notEmpty().withMessage('Debe ingresar su contraseña').bail()
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),

    body('contrasenia')
    .custom((value, {req}) => {
       return db.Usuarios.findOne({
            where: {
                email: req.body.email
            }
       })
       .then(user => {
           if(!bcryptjs.compareSync(value, user.dataValues.password)){
               return Promise.reject()
           }
       })
       .catch(() => {
           return Promise.reject("Email o contraseña incorrecta")
       })
    })

    /* body('email')
    .custom((value,{req}) =>{
        let usuario = usuarios.find(user => user.email === value && bcryptjs.compareSync(req.body.contrasenia, user.contrasenia))

        if (usuario) {
            return true
        }else{
            return false
        }
    })
    .withMessage('El email o la contraseña no coincide') */
    /* .withMessage('El usuario no se encuentra registrado o las credenciales son invalidas') */
]
