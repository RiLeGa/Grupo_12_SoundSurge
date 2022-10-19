'use strict';

let listado = require('../../data/usuarios.json')

let usuarios = listado.map(usuario => {
  let elemento = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: usuario.email,
    contrasenia: usuario.contrasenia,
    rol: usuario.rol ,
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', usuarios, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Usuarios ', null, {});
  }
};
