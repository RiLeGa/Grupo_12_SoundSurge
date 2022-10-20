'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historiales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      descuento: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING(1000)
      },
      marcasID: {
        type: Sequelize.INTEGER/*,
        allowNull:false,
        references:{
          model:{
            tableName: "Marcas"
          },
          key:"id"
        }*/
      },
      categoriasId: {
        type: Sequelize.INTEGER/*,
      
        references:{
          model:{
            tableName: "Categorias"
          },
          key:"id"}*/
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('historiales');
  }
};