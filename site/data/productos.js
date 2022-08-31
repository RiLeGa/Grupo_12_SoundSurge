const fs = require('fs')
let productos = require('./productos.json');

let ultimoId = productos[productos.length - 1].id + 1

console.log(ultimoId);
/* Creamos un nuevo producto */
let nuevoProducto = {
    id: ultimoId,
    marca: "",
    titulo: "",
    precio: 0,
    descuento: 0,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam, placeat eius perferendis aspernatur doloribus aliquid, quibusdam aperiam hic a tenetur! Quis rem aut qui expedita ut aspernatur nisi officiis.",
    stock: 0,
    imagenes: [
        "default.jpg"
    ]
}

productos.push(nuevoProducto);
/* console.log(productos);
 */
/* Pasamos el Objeto literal a un string */
/* let string = JSON.stringify(productos,null,4) */
/* Subimos los cambios y actualizaciones al json */
/* fs.writeFileSync('./src/data/productos.json',string,'utf-8') */


/* Editar producto */
let ProduEdit = productos.map((element,index) => {
    if (element.id === 6) {
        element.marca = ""
        element.titulo = ""
        element.precio = 530000
        element.stock = 3
    }
    return element
})

/* console.log(ProduEdit); */

/* Pasamos el Objeto literal a un string */
/* let string = JSON.stringify(ProduEdit,null,4) */
/* Subimos los cambios y actualizaciones al json */
/* fs.writeFileSync('./src/data/productos.json',string,'utf-8') */


/* Eliminar un producto */
let eliminarProducto = productos.filter(element => element.id !== 4)



/* Pasamos el Objeto literal a un string */
/* let string = JSON.stringify(eliminarProducto,null,4) */
/* Subimos los cambios y actualizaciones al json */
/* fs.writeFileSync('./src/data/productos.json',string,'utf-8') */
