const {check,body} = require('express-validator')
const db = require("../database/models");

module.exports = [

    /* Nombre */
    check('nombre').trim()
    .notEmpty().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
    
    /* Apellido */
    check('apellido')
    .notEmpty().withMessage('Debe ingresar su apellido')
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),

    /* Email */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),

    body('email').custom((value) => {
        return db.Usuarios.findOne({
            where: {
                email: value,
            }
        })
        .then((usuario) => {
            if(usuario){
                return Promise.reject('Email ya registrado')
            }
        })
    }),


    check('contrasenia')
    .notEmpty()
    .withMessage('Debe escribir su contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    check('confirmar')
    .notEmpty()
    .withMessage('Debe repetir su contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('confirmar').custom((value, {req}) => value !== req.body.contrasenia ? false : true)
    .withMessage('Las contraseñas no coinciden'),



    /* Contraseña */
    /* check('contrasenia')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    check('confirmar')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres').bail(), */

    /* terminos */
   /*  check('terminos')
    .notEmpty().withMessage('Debe Aceptar nuestros terminos y condiciones'),
 */
    /* body('confirmar')
    .custom((value,{req}) => value !== req.body.contrasenia ? false : true)
    .withMessage('Las contraseñas no coinciden').bail() */
]