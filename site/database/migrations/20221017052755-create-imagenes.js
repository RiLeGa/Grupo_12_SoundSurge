'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Imagenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      productosId: {
        type: Sequelize.INTEGER/*,
        
        references:{
          model:{
            tableName: "Productos"
          },
          key:"id"
        }*/
      },
      usuariosId: {
        type: Sequelize.INTEGER/*,
        
        references:{
          model:{
            tableName: "Usuarios"
          },
          key:"id"
        }*/
      },
      historialesId: {
        type: Sequelize.INTEGER/*,
        
        references:{
          model:{
            tableName: "Historiales"
          },
          key:"id"
        }*/
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
    await queryInterface.dropTable('Imagenes');
  }
};