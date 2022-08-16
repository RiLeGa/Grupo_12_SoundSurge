let productos = require('../data/productos.json')

module.exports = {
    home : (req,res) => {
        return res.render('home', {
            productos
        });
    }
}
