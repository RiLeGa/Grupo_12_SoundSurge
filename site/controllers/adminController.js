const fs = require('fs')
const path = require('path')
let productos = require('../data/productos.json')
let usuarios = require('../data/usuarios.json')
const historial = require('../data/historial.json')


const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
,JSON.stringify(dato,null,4),'utf-8')

const guardarU = (dato) => fs.writeFileSync(path.join(__dirname, '../data/usuarios.json')
,JSON.stringify(dato,null,4),'utf-8')

const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

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
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }

        if (errors.isEmpty()) {
            let img = req.files.map(imagen => {
                return imagen.filename
            })
        
        let {marca, titulo, categorias, precio, descuento, stock, descripcion, imagenes} = req.body
        
        let productoNuevo = {
            id: productos[productos.length - 1].id + 1,
            marca,
            titulo,
            categorias,
            precio:+precio,
            descuento:+descuento,
            stock:+stock,
            descripcion,
            imagenes: (req.files.length === 4) ? img : ['default-image.png', 'default-image.png', 'default-image.png', 'default-image.png'],
        }
        

        productos.push(productoNuevo)
        guardar(productos)

        return res.redirect('/admin/lista')

        /* Redirecciona a la lista de productos */
       
        /* Redirecciona al detalle del producto recien creado */
        /* return res.send(req.body) */
    } else {
        let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'images', dato))

        req.files.forEach(imagen => {
            if (ruta(imagen) && (imagen !== "default-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'images', imagen))
            }
        })
        /* return res.send(errors.mapped()) */
        return res.render('admin/crearProductos', {
            errors: errors.mapped(),
            old: req.body
        })
    }
    },
    editar : (req,res) => {
    id = +req.params.id
    let producto = productos.find((elemento) => {
        return elemento.id == id
    })
    
    /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
    return res.render('admin/editarProductos',{
        productos,
        producto
        
    })
    
    },
    actualizar:(req,res) => {
        idParams = +req.params.id
        let {Marca,Titulo,Categoria,Precio,Descuento,Stock,Descripcion,Imagenes} = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.marca = Marca
                producto.titulo = Titulo
                producto.categorias = Categoria
                producto.precio = +Precio
                producto.descuento = +Descuento
                producto.stock = +Stock
                producto.descripcion = Descripcion
                producto.imagenes = Imagenes
            }
        })

        guardar(productos)

        return res.redirect('/admin/lista')

        /* return res.send(req.body) */
    },
    borrar: (req, res) => {
        idParams = +req.params.id

        let productoParaEliminar = productos.find((elemento) => {
            return elemento.id == idParams
        })

        historial.push(productoParaEliminar)
        guardarHistorial(historial)


        let productosModificados = productos.filter(producto => producto.id !== idParams)
        guardar(productosModificados)

        return res.redirect('/admin/lista')
    },
    papelera: (req,res) => {
        return res.render('admin/papelera', {
            historial
        }
        )
    },
    //visualiza vista con listado de usuarios//
    userlist : (req,res) => {
        return res.render('admin/listaDeUsuarios',{
            usuarios
        });
    },
    borrarUsuario: (req, res) => {
        idParams = +req.params.id


        usuarios = usuarios.filter(usuario => usuario.id !== idParams)
        guardarU(usuarios)

        return res.redirect('/')
    },
    papeleraUsuarios: (req,res) => {
        return res.render('admin/papeleraDeUsuarios', {
            historialUsuarios
        })
    }
}
