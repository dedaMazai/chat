'use strict';

const { createPasswordHashSync } = require('../system/user-create-helper');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      password: createPasswordHashSync('user1'),
      email: 'user1@mail.ru',
      info: 'Здесь информация',
      massage: 'Привет'
    },
    {
      password: createPasswordHashSync('user12'),
      email: 'user2@mail.ru',
      info: 'Здесь информация',
      massage: 'Привет'
    },
    {
      password: createPasswordHashSync('user123'),
      email: 'user3@mail.ru',
      info: 'Здесь информация',
      massage: 'Привет'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
