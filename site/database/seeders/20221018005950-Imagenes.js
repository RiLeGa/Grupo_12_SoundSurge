'use strict';

let listado = require('../../data/productos.json')
let imagenes = []

listado.forEach(producto => {
  let imagen = {
    nombre: producto.imagenes[0],
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen2 = {
    nombre: producto.imagenes[1],
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen3 = {
    nombre: producto.imagenes[2],
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen4 = {
    nombre: producto.imagenes[3],
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen5 = {
    nombre: producto.imagenes[4],
    createdAt:new Date,
    updatedAt:new Date
  }
  imagenes.push(imagen,imagen2,imagen3,imagen4,imagen5)
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Imagenes', imagenes, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Imagenes ', null, {});
  }
};

