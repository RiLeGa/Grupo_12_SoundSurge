let productos = require('../data/productos.json')
let db =require("../database/models")
module.exports = {
    home : (req,res) => {
        let productos = db.productos.findAll({
            include:["category"]
        })
        Promise.all(productos)
        .then((productos)=> {
            return res.render('home', {
                productos
            })
        })
        .catch(error => res.send(error))


        
    }
}
