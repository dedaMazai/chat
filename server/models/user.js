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
    massage: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};