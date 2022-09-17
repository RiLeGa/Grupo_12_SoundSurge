const {check,body} = require('express-validator')

module.exports = [
    /* Nombre */
    check('nombre').trim()
    .notEmpty().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
    
    /* Apellido */
    check('apellido').trim()
    .notEmpty().withMessage('Debe ingresar su apellido').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),

    /* Direccion */
    check('direccion').trim()
    .notEmpty().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
    
    /* Telefono */
    check('telefono').trim()
    .notEmpty().withMessage('Debe ingresar su apellido').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),

    /* Email */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),

    /* Contraseña */
    check('contraseña')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres').bail(),
    check('confirmar')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres').bail(),

    /* terminos */
    check('terminos')
    .notEmpty().withMessage('Debe Aceptar nuestros terminos y condiciones'),

    body('confirmar')
    .custom((value,{req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden')
]