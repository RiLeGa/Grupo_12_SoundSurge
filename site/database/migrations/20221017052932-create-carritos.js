'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productosId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName: "Productos"
          },
          key:"id"
        }
      },
      usuariosId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName: "Usuarios"
          },
          key:"id"
        }
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
    await queryInterface.dropTable('carritos');
  }
};