'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
   
    static associate(models) {
      Productos.belongsTo(models.Categorias,{
        as: "Category",
        foreignKey: "categoriasId"
      })
    }
  }
  Productos.init({
    titulo: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    marcasID: DataTypes.INTEGER,
    categoriasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};