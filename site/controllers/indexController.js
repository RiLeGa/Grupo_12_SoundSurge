
let db =require("../database/models")
const { Op } = require("sequelize");

module.exports = {
    home : (req,res) => {
        let productos = db.Productos.findAll({
            include:['category','marca','imagenes',]
        })
        Promise.all([productos])
        .then(([productos])=> {
            
            
            return res.render('home', {
                productos
            })

        })
        .catch(error => res.send(error))
        
    }
}
