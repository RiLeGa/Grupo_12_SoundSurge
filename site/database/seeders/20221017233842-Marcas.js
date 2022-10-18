'use strict';

let listado =["Epiphone","Yamaha","Gibson","Marshall","Ibanez","Behringer","Arturia","Line6","Zildjian","Orange ","MERCADOFLASH "]

let marcas = listado.map(marca => {
  let elemento = {
    nombre: marca,
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Marcas', marcas, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Marcas ', null, {});
  }
};
