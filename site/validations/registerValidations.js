const {check,body} = require('express-validator')

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

    /* Contraseña */
    check('contrasenia')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    check('confirmar')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres').bail(),

    /* terminos */
    check('terminos')
    .notEmpty().withMessage('Debe Aceptar nuestros terminos y condiciones'),

    body('confirmar')
    .custom((value,{req}) => value !== req.body.contrasenia ? false : true)
    .withMessage('Las contraseñas no coinciden').bail()
]