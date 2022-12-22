
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

        let categorias = db.Categorias.findAll({
            include:[{ all: true}],
            where : {
                [Op.or] : [
                    {nombre : {[Op.substring] : elemento}},
                ]
            }
        })

        let marcas = db.Marcas.findAll({
            include:[{ all: true}],
            where : {
                [Op.or] : [
                    {nombre : {[Op.substring] : elemento}},
                ]
            }
        })

        let productos = db.Productos.findAll({
            include:['category','marca','imagenes',],
            where : {
                [Op.or] : [
                    {titulo : {[Op.substring] : elemento}},
                    {descripcion : {[Op.substring] : elemento}}
                ]
            }
        })
        
        Promise.all([productos, marcas, categorias])
        .then(([productos, marcas, categorias])=> {

        return res.render('busqueda', 
        {
            busqueda: elemento,
            productos,
            marcas, 
            categorias
        });
    })
   },
   aboutUs:(req,res)=>{
    return res.render("aboutSound")
   }
}
