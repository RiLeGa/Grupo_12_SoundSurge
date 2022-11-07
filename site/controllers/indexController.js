
let db =require("../database/models")

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
        let elemento = req.query.icon-search

        db.Productos.findAll({
            where : {
                [Op.or] : [
                    {nombre : {[Op.substring] : elemento}},
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
