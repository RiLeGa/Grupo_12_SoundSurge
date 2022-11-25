const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

let usuarios = require('../data/usuarios.json')


let db = require('../database/models')
let Sequelize = require('sequelize')


const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
,JSON.stringify(dato,null,4),'utf-8')

const guardarU = (dato) => fs.writeFileSync(path.join(__dirname, '../data/usuarios.json')
,JSON.stringify(dato,null,4),'utf-8')

const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {
    lista : (req,res) => {
        let productos = db.Productos.findAll({
            include:[{ all: true}]
        })
        Promise.all([productos])
        .then(([productos])=> {
            
            
            return res.render('admin/listaDeProductos', {
                productos
            })
        })
        .catch(error => res.send(error))
    },
    crear : (req,res) => {
        let categorias = db.Categorias.findAll()
        let marcas = db.Marcas.findAll()
        Promise.all([categorias,marcas])
        .then(([categorias,marcas]) => {
            return res.render('admin/crearProductos',{
                categorias,
                marcas
            })
        })
        .catch(error => res.send(error))
    },
    store:(req,res) => {
        /* return res.send(req.body)  */
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }

        if (errors.isEmpty()) {
          
        let {marcas, titulo, categorias, precio, descuento, stock, descripcion} = req.body
        
        db.Productos.create({
       
           
            titulo,
            categoriasId: +categorias,
            marcasId: +marcas,
            precio:+precio,
            descuento:+descuento,
            stock:+stock,
            descripcion,
            
        })
        

        .then(productoNuevo => {

            if (req.files.length !== 0) {
                
                let img = req.files.map(imagen => {
                    let nuevo = {
                        nombre: imagen.filename,
                        productosId: productoNuevo.id
                    }
                    return nuevo
                })
                db.Imagenes.bulkCreate(img)
                .then(imagenes => {
                    return res.redirect('/admin/lista')
                })
            }else{
                
                db.Imagenes.create({
                    nombre: 'default-image.png',
                    productosId: productoNuevo.id
                })
                .then(imagenes => {
                    return res.redirect('/admin/lista')
                })
            }
        })
        .catch(error => res.send(error))
    } else {
        let ruta = (dato) => fs.existsSync(path.join(__dirname,'..', '..', 'public', 'images',  dato))

        req.files.forEach(imagen => {
            if (ruta(imagen) && (imagen !== "default-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..','..', 'public', 'images',  imagen))
            }
        })
        /* return res.send(errors.mapped()) */
        let categorias = db.Categorias.findAll()
        let marcas = db.Marcas.findAll()
        Promise.all([categorias,marcas])
        .then(([categorias,marcas]) => {
            return res.render('admin/crearProductos',{
                categorias,
                marcas,
                errors: errors.mapped(),
                old: req.body
            })
        })
    }
    },
    editar : (req,res) => {
        let idParams = +req.params.id
        let categorias = db.Categorias.findAll()
        let marcas = db.Marcas.findAll()
        let producto = db.Productos.findOne({
            where: {
                id : idParams
            },
            include: [{
                all:true
            }]
        })
        Promise.all([categorias,marcas,producto])
        .then(([categorias,marcas,producto]) => {
                /* return res.send(imagenes) //Comprobar que esta llegando bien el elemento */
                return res.render('admin/editarProductos', {
                    producto,
                    categorias,
                    marcas
                })
        })
        .catch(error => res.send(error))
    
    },
    actualizar:(req,res) => {
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {
            const idParams = +req.params.id
          
            const { marcas, titulo, categorias, precio, descuento, stock, descripcion } = req.body
           
            let producto = db.Productos.findOne({
                where: {
                    id : idParams
                },
                include: [{
                    all:true
                }]
            })
            let actualizacion = db.Productos.update({
                titulo,
                precio: +precio,
                descuento: +descuento,
                stock: +stock,
                descripcion,
                categoriasId: +categorias,
                marcasId: +marcas,
            },{
                where: {
                    id : idParams
                }
            })

            Promise.all([producto,actualizacion])
           .then(([producto,actualizacion]) => {

                let imagen1
                let imagen2
                let imagen3
                let imagen4
                let promesas = []

                /* Imagen 1 */
                /* Existe en la base de datos */
                if (producto.imagenes[0]) {
                    /* viene una imagen nueva */
                    if(!!req.files.imagen1){
                        /* Guardo el nombre en una variable para despues borrarla */
                        imagen1 = producto.imagenes[0].nombre
                        /* La reemplazamos en la base de datos */
                        promesas.push(
                            db.Imagenes.update({
                            nombre:req.files.imagen1[0].filename
                        },{
                            where: {
                                id : producto.imagenes[0].id
                            }
                        }))
                        /* Borramos la imagen anterior */
                        if(fs.existsSync(path.join(__dirname,'../../public/images',imagen1))){
                            fs.unlinkSync(path.join(__dirname, '../../public/images', imagen1))
                        }
                    }
                }else{
                    /* Si no existe la imagen en la base de datos, tenemos que crearla */
                    if(!!req.files.imagen1){

                        /* Creamos la imagen en la base de datos */
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen1[0].filename,
                            productosId: producto.id
                        }))
                    }
                }

                /* Imagen 2 */
                
                if (producto.imagenes[1] ) {
                   
                    if(!!req.files.imagen2){
                        imagen2 = producto.imagenes[1].nombre
                        promesas.push(
                        db.Imagenes.update({
                            nombre:req.files.imagen2[0].filename
                        },{
                            where: {
                                id : producto.imagenes[1].id
                            }
                        }))
                        
                        if(fs.existsSync(path.join(__dirname,'../../public/images',imagen2))){
                            fs.unlinkSync(path.join(__dirname, '../../public/images', imagen2))
                        }
                    }
                }else{
                    console.log("hola4")
                    if(!!req.files.imagen2){
                        
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen2[0].filename,
                            productosId: producto.id
                        }))
                    }
                } 
                /* Imagen 3 */
                if (producto.imagenes[2]) {
                    if(!!req.files.imagen3){
                        imagen3 = producto.imagenes[2].nombre
                        promesas.push(
                        db.Imagenes.update({
                            nombre:req.files.imagen3[0].filename
                        },{
                            where: {
                                id : producto.imagenes[2].id
                            }
                        }))
                        if(fs.existsSync(path.join(__dirname,'../../public/images',imagen3))){
                            fs.unlinkSync(path.join(__dirname, '../../public/images', imagen3))
                        }
                    }
                }else{
                    if(!!req.files.imagen3){
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen3[0].filename,
                            productosId: producto.id
                        }))
                    }
                }
                /* Imagen 4 */
                if (producto.imagenes[3]) {
                    if(!!req.files.imagen4){
                        imagen4 = producto.imagenes[3].nombre
                        promesas.push(
                        db.Imagenes.update({
                            nombre:req.files.imagen4[0].filename
                        },{
                            where: {
                                id : producto.imagenes[3].id
                            }
                        }))
                        if(fs.existsSync(path.join(__dirname,'../../public/images',imagen4))){
                            fs.unlinkSync(path.join(__dirname, '../../public/images', imagen4))
                        }
                    }
                }else{
                    if(!!req.files.imagen4){
                        promesas.push(
                        db.Imagenes.create({
                            nombre: req.files.imagen4[0].filename,
                            productosId: producto.id
                        }))
                    }
                }
                Promise.all(promesas)
                .then(promesas => {
                    return res.redirect('/admin/lista')
                })
            })
            .catch(error => res.send(error))
        } else {
           
        let idParams = +req.params.id
        let categorias = db.Categorias.findAll()
        let marcas = db.Marcas.findAll()
        let producto = db.Productos.findOne({
            where: {
                id : idParams
            },
            include: [{
                all:true
            }]
        })
        Promise.all([categorias,marcas,producto])
        .then(([categorias,marcas,producto]) => {
                /* return res.send(imagenes) //Comprobar que esta llegando bien el elemento */
                return res.render('admin/editarProductos', {
                    producto,
                    categorias,
                    marcas,
                    errors: errors.mapped()
                })
        })
        .catch(error => res.send(error))
        } 
    },
    borrar: (req, res) => {

        let idParams = +req.params.id
        db.Productos.findOne({
            where : {
                id : idParams
            },
            include : [{
                all:true
            }]
        })
        .then(producto => {

            db.Historiales.create({
                titulo: producto.titulo,
                precio: producto.precio,
                descuento: producto.descuento,
                stock: producto.stock,
                descripcion:producto.descripcion,
                categoriasId: producto.categoriasId,
                marcasId: producto.marcasId,
            })
            .then(historial => {
                let promesas = []

                let imagen1 = db.HistorialImagenes.create({
                    nombre: producto.imagenes[0].nombre,
                    historialId: historial.id
                })
                let imagen2 = db.HistorialImagenes.create({
                    nombre: producto.imagenes[1].nombre,
                    historialId: historial.id
                })
                let imagen3 = db.HistorialImagenes.create({
                    nombre: producto.imagenes[2].nombre,
                    historialId: historial.id
                })
                let imagen4 = db.HistorialImagenes.create({
                    nombre: producto.imagenes[3].nombre,
                    historialId: historial.id
                })

                Promise.all([imagen1,imagen2,imagen3,imagen4])
                .then(([imagen1,imagen2,imagen3,imagen4])=>{
                    db.Productos.destroy({
                        where : {
                            id : idParams
                        }
                    })
                    .then(producto => {
                        return res.redirect('/admin/papelera')
                    })
                })
            })
        })
        .catch(error => res.send(error))
    },
    papelera: (req,res) => {
        let historiales = db.Historiales.findAll({
            include:[{ all: true}]
        })
        Promise.all([historiales])
        .then(([historiales])=> {
            
            
            return res.render('admin/papelera', {
                historiales
            })
        })
        .catch(error => res.send(error))
    },
    //visualiza vista con listado de usuarios//
    userlist : (req,res) => {

        let usuarios = []
        db.Usuarios.findAll()     
        .then((todos) => {
            usuarios = todos
        })

        res.send(usuarios)
          /*   return res.render('admin/listaDeUsuarios',{
                usuarios
              })
 */
       

        /* let response = {
            status : 200,
            meta : {
                length : usuarios.length,
                path : "ruta"
            },
            data: usuarios  
                            
        }  */

        /* return res.status(200).json(response) */

        .catch((error) => {
            return res.send(error)
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
