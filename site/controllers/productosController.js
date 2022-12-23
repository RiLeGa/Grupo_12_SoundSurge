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
        return res.render('productos/carrito')
    },
    listarCategorias : (req,res) => {
        /* return res.send(req.params.categoria) */
        let categoriaSeleccionada = req.params.categoria
        /* return res.send(categoriaSeleccionada) */
        let productos = db.Productos.findAll({
            include:['category','imagenes',]
        })
        let categorias = db.Categorias.findAll({
            where: {
                nombre: categoriaSeleccionada
            },

            include:[{ all: true}]
        })
        Promise.all([productos,categorias])
        .then(([productos,categorias])=> {
            
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
        let productos = db.Productos.findAll({
            include:[{ all: true}]
        })
        Promise.all([marcas, productos])
        .then(([marcas, productos])=> {
            
            
            return res.render('productos/marcas', {
                marcas,
                productos
            })
        })
        .catch(error => res.send(error))
    },
    listarTodos : (req,res) => {
        let productos = db.Productos.findAll({
            include:['category','marca','imagenes',]
        })
        let marcas = db.Marcas.findAll({
            include:[{ all: true}]
        })
        let categorias = db.Categorias.findAll({
            include:[{ all: true}]
        })
        
        Promise.all([productos, marcas, categorias])
        .then(([productos, marcas, categorias])=> {
            
            return res.render('productos/todosLosProductos', {
                productos,
                categorias,
                marcas


            })
            

        })
        .catch(error => res.send(error))
        
    },
    listarMasVendidos : (req,res) => {
        
        let productos = db.Productos.findAll({
            include:['category','marca','imagenes',]
        })
        console.log(productos)
        let marcas = db.Marcas.findAll({
            include:[{ all: true}]
        })
        let categorias = db.Categorias.findAll({
            include:[{ all: true}]
        })
        
        Promise.all([productos, marcas, categorias])
        .then(([productos, marcas, categorias])=> {
            
            return res.render('productos/lo+Vendido', {
                productos,
                categorias,
                marcas
            })
            

        })
        .catch(error => res.send(error))
        
    }
}
