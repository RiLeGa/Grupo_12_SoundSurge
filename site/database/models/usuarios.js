'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    imagen: DataTypes.STRING,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};