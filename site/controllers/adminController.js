const fs = require('fs')
const path = require('path')
let productos = require('../data/productos.json')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
,JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    lista : (req,res) => {
        return res.render('admin/listaDeProductos',{
            productos
        })
    },
    crear : (req,res) => {
        return res.render('admin/crearProductos');
    },
    store:(req,res) => {
        let {Marca,Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body
        
        let productoNuevo = {
            id: productos[productos.length - 1].id + 1,
            marca:Marca,
            titulo:Titulo,
            categorias:Categoria,
            precio:+Precio,
            descuento:+Descuento,
            stock:+Stock,
            descripcion:Descripcion,
            imagenes: [
                "default-image.png",
                "default-image.png",
                "default-image.png",
                "default-image.png"
            ],
        }

        productos.push(productoNuevo)
        guardar(productos)

        /* Redirecciona a la lista de productos */
        return res.redirect('/administrador/lista')
        /* Redirecciona al detalle del producto recien creado */
    },
    editar : (req,res) => {
    id = +req.params.id
    let producto = productos.find((elemento) => {
        return elemento.id == id
    })
    /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
    return res.render('admin/editarProductos',{
        producto
    })
    },
    actualizar:(req,res) => {
        idParams = +req.params.id
        let {Marca,Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.marca = Marca
                producto.titulo = Titulo
                producto.categorias = Categoria
                producto.precio = +Precio
                producto.descuento = +Descuento
                producto.stock = +Stock
                producto.descripcion = Descripcion
            }
        })
        guardar(productos)
        return res.redirect('/admin/lista')
    }
}

