let productos = require('../data/productos.json')

module.exports = {
    detalle : (req,res) => {
        let id = +req.params.id
        let productoEnDetalle = productos.find((producto) => producto.id === id)
        return res.render('detalle',{
            producto : productoEnDetalle,
            productos
        });
    },

    carrito : (req,res) => {
        let id = +req.params.id
        let productoCarrito = productos.find((producto) => producto.id === id)
        return res.render('carrito',{
            producto : productoCarrito,
            productos
        });
    }
}
