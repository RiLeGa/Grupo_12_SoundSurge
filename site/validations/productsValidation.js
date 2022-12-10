const {check} = require('express-validator')

module.exports = [
    /* Titulo */
    check('titulo').trim()
    .notEmpty().withMessage("Debes ingresar el titulo de tu producto").bail()
    .isLength({min:5},{max:10}).withMessage("El titulo del producto debe tener mas de 5 caracteres y un maximo de 10"),

    /* Marca */
    check('marcas').trim()
    .notEmpty().withMessage("Debes ingresar una marca"),

    /* Precio */
    check('precio').trim()
    .notEmpty().withMessage("Debes ingresar un precio de tu producto").bail()
    .isInt().withMessage('Solo se aceptan numeros')
    .isLength({min:2},{max:10}).withMessage("El precio del producto debe contener 2 numeros y maximo 10"),

    /* Descuento */
    check('descuento').trim()
    .notEmpty().withMessage('Este campo es obligatorio').bail()
    .isInt().withMessage('Solo se aceptan numeros')
    .isLength({max:2}).withMessage("El descuento no debe ser mayor a 2 cifras"),

    /* Stock */
    check('stock').trim()
    .isInt().withMessage('Solo se aceptan numeros')
    .isLength({min:1}).withMessage("El stock del producto debe contener 1 numero y maximo 10"),

    /* Categoria */
    check('categorias').trim()
    .notEmpty().withMessage('Debe seleccionar una categoria'),

    /* Descripcion */
    check('descripcion').trim()
    .notEmpty().withMessage("Debes ingresar una descripcion de tu producto").bail()
    .isLength({min:10}).withMessage("La descripcion del producto debe contener 10 caracteres y maximo 255"),
]
