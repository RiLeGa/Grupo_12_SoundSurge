'use strict';

let listado = ["Cuerdas","Percusion",'Tablets',"Audio","Teclados/Pianos/Controladores","Otros"]

let categorias = listado.map(categoria => {
  let elemento = {
    nombre: categoria,
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', categorias, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categorias ', null, {});
  }
};

