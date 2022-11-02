'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    
    static associate(models) {
      Roles.hasMany(models.Usuarios,{
        as:'usuarios',
        foreignKey: 'rolId'
      })
    }
  }
  Roles.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};