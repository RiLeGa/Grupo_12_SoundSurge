const db = require("../../database/models");

module.exports = {
    usuarios: (req,res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            let response = {
                status : 200,
                meta : {
                    length : usuarios.length,
                    url: "www.rutagenerica.com"
                },
                data : usuarios
            }
            return res.status(200).json(response)
        })

        
    },
    usuarioEspecifico:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "Usuario.length",
                url:"www.rutagenerica.com"
            },
            data : "Usuario"
        }
        return res.status(200).json(response)
    },
    productos:(req,res) => {
        db.Productos.findAll()
        .then(productos => {
        let response = {
            status : 200,
            meta : {
                length : productos.length,
                url:"www.rutagenerica.com"
            },
            data : productos
        }
        
        return res.render('../todosLosProductos', {
            response
        })
        return res.status(200).json(response)
    })
    },
    productoEspecifico:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "Producto.length",
                url:"www.rutagenerica.com"
            },
            data : "Producto"
        }
        return res.status(200).json(response)
    },
    agregar:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "ProductoAgregado.length",
                url:"www.rutagenerica.com"
            },
            data : "ProductoAgregado"
        }
        return res.status(200).json(response)
    },
    editar:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "ProductoEditado.length",
                url:"www.rutagenerica.com"
            },
            data : "ProductoEditado"
        }
        return res.status(200).json(response)
    },
    eliminar:(req,res) => {
        let response = {
            status : 200,
            meta : {
                length : "ProductoEliminado.length",
                url:"www.rutagenerica.com"
            },
            data : "ProductoEliminado"
        }
        return res.status(200).json(response)
    },
}