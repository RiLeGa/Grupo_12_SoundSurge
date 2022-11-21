

let db = require('../database/models')
let Sequelize = require('sequelize')


module.exports = {
    detalle : (req, res) => {
        let idParams = +req.params.id
        db.Productos.findByPk(idParams, {
            include: [{
                all: true
            }]
        })
            .then(producto => {
                db.Productos.findAll({
                    where: {
                        categoriasId: producto.categoriasId
                    },
                    limit: 4,
                    order: [[Sequelize.literal("RAND()")]],
                    include: [{
                        all: true
                    }]
                })
                    .then(productos => {
                        /* return res.send(productos) */
                        return res.render('productos/detalle', {
                            producto,
                            productos
                        })
                    })
            })
            .catch(error => res.send(error))
    },

    carrito : (req,res) => {
        let compra = []
        let idParams = +req.params.id
        db.Productos.findByPk(idParams, {
            include: [{ all: true}]
        })
         .then(producto => {
                    
                        return res.render('carrito', {
                            producto
                            
                        })
                        
                    })
                    return compra.push(producto)
            .catch(error => res.send(error))
    },
    listarCategorias : (req,res) => {
        return res.render("productos/categorias")
    },
    listarMarcas : (req,res) => {
        return res.render("productos/marcas")
    },
    listarTendencia : (req,res) => {
        return res.render("productos/loMasVendido")
    }
}
