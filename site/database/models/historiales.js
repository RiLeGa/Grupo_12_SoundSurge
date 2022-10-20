'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historiales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productos.belongsTo(models.Categorias,{
        as: 'category',
        foreignKey: 'categoriasId'
      }),
      Productos.belongsTo(models.Marcas,{
        as: 'marca',
        foreignKey: 'marcasId'
      })
    }
  }
  historiales.init({
    titulo: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    marcasID: DataTypes.INTEGER,
    categoriasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'historiales',
  });
  return historiales;
};