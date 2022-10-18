'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Productos.belongsTo(models.Marcas,{
          as: 'marca',
          foreignKey: 'marcasId'
        })
        Productos.belongsTo(models.Categorias,{
          as: 'categoria',
          foreignKey: 'categoriasId'
        })
        Productos.hasMany(models.Imagenes,{
          as: 'imagenes',
          foreignKey: 'productosId',
          onDelete:'cascade'
        })
    }
    }
  Productos.init({
    titulo: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    marcaId: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER,
    imagenes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};