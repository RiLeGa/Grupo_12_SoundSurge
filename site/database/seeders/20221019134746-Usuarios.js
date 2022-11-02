'use strict';

let listado = require('../../data/usuarios.json')

  /*nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rolId: DataTypes.INTEGER */

let usuarios = listado.map(usuario => {
  let elemento = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    direccion: usuario.direccion,
    telefono: usuario.telefono,
    email: usuario.email,
    contrasenia: usuario.contrasenia,
    imagen: usuario.imagen,
    rolId: usuario.rol === 'admin' ? 1 : 2,
    createdAt:new Date,
    updatedAt:new Date
  }
  return elemento
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Usuarios', null, {});
  }
};