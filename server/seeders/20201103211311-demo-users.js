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
      massage: `{
        "1" : {"To" : "60", "sms" : "Привет"},
        "2" : {"To" : "61", "sms" : "Пока"},
        "3" : {"To" : "62", "sms" : "Андрей"}
      }`,
      smsTake: `{
        "1" : {"From" : "60", "sms" : "Привет"},
        "2" : {"From" : "61", "sms" : "Пока"},
        "3" : {"From" : "62", "sms" : "Андрей"}
      }`
    },
    {
      password: createPasswordHashSync('user12'),
      email: 'user2@mail.ru',
      login: 'user2@mail.ru',
      info: 'Здесь информация',
      tel: '89888884388',
      posit: 'Директор',
      massage: `{
        "1" : {"To" : "60", "sms" : "Привет"},
        "2" : {"To" : "61", "sms" : "Пока"},
        "3" : {"To" : "62", "sms" : "Андрей"}
      }`,
      smsTake: `{
        "1" : {"From" : "60", "sms" : "Привет"},
        "2" : {"From" : "61", "sms" : "Пока"},
        "3" : {"From" : "62", "sms" : "Андрей"}
      }`
    },
    {
      password: createPasswordHashSync('user123'),
      email: 'user3@mail.ru',
      login: 'user2@mail.ru',
      info: 'Здесь информация',
      tel: '89888884388',
      posit: 'Директор',
      massage: `{
        "1" : {"To" : "60", "sms" : "Привет"},
        "2" : {"To" : "61", "sms" : "Пока"},
        "3" : {"To" : "62", "sms" : "Андрей"}
      }`,
      smsTake: `{
        "1" : {"From" : "60", "sms" : "Привет"},
        "2" : {"From" : "61", "sms" : "Пока"},
        "3" : {"From" : "62", "sms" : "Андрей"}
      }`
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
