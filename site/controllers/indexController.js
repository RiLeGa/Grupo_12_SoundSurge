
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
        
    },
    search : (req,res) => {
        let elemento = req.query.search

        db.Productos.findAll( {
            where : {
                [Op.or] : [
                    {titulo : {[Op.substring] : elemento}},
                    {descripcion : {[Op.substring] : elemento}}
                ]
            }
        })
        return res.render('busqueda', 
        {
            busqueda: elemento,
            resultados
        });
    }
}
