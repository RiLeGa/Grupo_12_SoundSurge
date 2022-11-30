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
               let productosPorCategoria = db.Productos.findAll({
                    where: {
                        categoriasId: producto.categoriasId
                    },
                    limit: 4,
                    order: [[Sequelize.literal("RAND()")]],
                    include: [{
                        all: true
                    }]
                })
                let productosAlAzar = db.Productos.findAll({
                    limit: 4,
                    order: [[Sequelize.literal("RAND()")]],
                    include: [{
                        all: true
                    }]
                })
                    Promise.all([productosPorCategoria, productosAlAzar])
                    .then(([productosPorCategoria, productosAlAzar])=> {
                        let productos = []
                        productosPorCategoria.forEach(elemento => {
                            productos.push(elemento)
                        });
                        console.log(productos.length)
                        for (let i = 0; i < ( 6 - productos.length) ; i++) {
                              productos.push(productosAlAzar[i])
                        }
                        console.log(productos.length);
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
        let categorias = db.Categorias.findAll({
            include:[{ all: true}]
        })
        let productos = db.Productos.findAll({
            include:[{ all: true}]
        })

        Promise.all([categorias, productos])
        .then(([categorias, productos])=> {
            
            return res.render('productos/categorias', {
                categorias,
                productos
            })
        })
        .catch(error => res.send(error))
    },
    listarMarcas : (req,res) => {
        let marcas = db.Marcas.findAll({
            include:[{ all: true}]
        })
        Promise.all([marcas])
        .then(([marcas])=> {
            
            
            return res.render('productos/marcas', {
                marcas
            })
        })
        .catch(error => res.send(error))
    },
    listarTodos : (req,res) => {
        let productos = db.Productos.findAll({
            include:['category','marca','imagenes',]
        })
        
        Promise.all([productos])
        .then(([productos])=> {
            
            return res.render('productos/todosLosProductos', {
                productos
            })
            

        })
        .catch(error => res.send(error))
        
    },
    listarMasVendidos : (req,res) => {
        let productos = db.Productos.findAll({
            include:['category','marca','imagenes',]
        })
        
        Promise.all([productos])
        .then(([productos])=> {
            
            return res.render('productos/lo+Vendido', {
                productos
            })
            

        })
        .catch(error => res.send(error))
        
    }
}
