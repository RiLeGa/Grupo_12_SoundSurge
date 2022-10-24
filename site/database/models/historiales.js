'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historiales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Historiales.belongsTo(models.Categorias,{
        as: 'category',
        foreignKey: 'categoriasId'
      }),
      Historiales.belongsTo(models.Marcas,{
        as: 'marca',
        foreignKey: 'marcasId'
      }),HistorialImagenes.hasMany(models.Productos,{
        as: 'historyal',
        foreignKey: 'historialId'
      })
      
    }
  }
  Historiales.init({
    titulo: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categoriasId: DataTypes.INTEGER,
    marcasId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historiales',
  });
  return Historiales;
};