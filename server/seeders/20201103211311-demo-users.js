'use strict';

const { createPasswordHashSync } = require('../services/helpers/user-create-helper');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      password: createPasswordHashSync('user1'),
      email: 'user1@mail.ru',
      login: 'user2@mail.ru',
      info: 'Здесь информация',
      tel: '89888884388',
      posit: 'Директор',
      massage: 'Привет'
    },
    {
      password: createPasswordHashSync('user12'),
      email: 'user2@mail.ru',
      login: 'user2@mail.ru',
      info: 'Здесь информация',
      tel: '89888884388',
      posit: 'Директор',
      massage: 'Привет'
    },
    {
      password: createPasswordHashSync('user123'),
      email: 'user3@mail.ru',
      login: 'user2@mail.ru',
      info: 'Здесь информация',
      tel: '89888884388',
      posit: 'Директор',
      massage: 'Привет'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
