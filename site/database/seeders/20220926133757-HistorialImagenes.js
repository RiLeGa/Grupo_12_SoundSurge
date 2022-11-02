'use strict';
let listado = require('../../data/historial.json')
let historialImagenes = []

listado.forEach(historial => {
  let imagen = {
    nombre: historial.imagenes[0],
    historialId: historial.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen2 = {
    nombre: historial.imagenes[1],
    historialId: historial.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen3 = {
    nombre: historial.imagenes[2],
    historialId: historial.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  let imagen4 = {
    nombre: historial.imagenes[3],
    historialId: historial.id,
    createdAt:new Date,
    updatedAt:new Date
  }
  
  historialImagenes.push(imagen,imagen2,imagen3,imagen4)
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('HistorialImagenes', historialImagenes, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('HistorialImagenes', null, {});
  }
};
