'use strict';

let listado = require('../../data/historial.json')

let listadoCategorias = ["Cuerdas","Percusion","Audio","Teclados/Pianos/Controladores","Otros"]
let marcas = ["Epiphone","Yamaha","Gibson","Marshall","Ibanez","Behringer","Arturia","Line6","Zildjian","Orange ","MERCADOFLASH "]

let historiales = []

listado.forEach(historial => {
  let categoria
  let marca
  
  listadoCategorias.forEach((categoriaLista,index) => {
    if (categoriaLista === historial.categoria) {
        return categoria = index + 1
    }
  });

  marcas.forEach((elemento,index) => {
    if ((elemento.toUpperCase()) === (historial.marca.toUpperCase())) {
        return marca = index + 1
    }
  });

  let nuevo = {
    titulo: historial.titulo,
    stock: historial.stock,
    precio: historial.precio,
    descuento: historial.descuento,
    descripcion: historial.descripcion,
    categoriasId: categoria,
    marcasId: marca,
    createdAt:new Date,
    updatedAt:new Date
  }
  historiales.push(nuevo)
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Productos', historiales, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Productos', null, {});
  }
};