'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carritos.init({
    productosId: DataTypes.INTEGER,
    usuariosId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carritos',
  });
  return Carritos;
};