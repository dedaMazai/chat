'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  };
  User.init({
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    info: DataTypes.STRING,
    massage: DataTypes.JSON,
    login: DataTypes.STRING,
    tel: DataTypes.STRING,
    posit: DataTypes.STRING,
    smsTake: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};