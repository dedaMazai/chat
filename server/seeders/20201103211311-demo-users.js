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
        "1" : {"Кому" : "60", "sms" : "Привет"},
        "2" : {"Кому" : "61", "sms" : "Пока"},
        "3" : {"Кому" : "62", "sms" : "Андрей"}
      }`,
      smsTake: `{
        "1" : {"От_кого" : "60", "sms" : "Привет"},
        "2" : {"От_кого" : "61", "sms" : "Пока"},
        "3" : {"От_кого" : "62", "sms" : "Андрей"}
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
        "1" : {"Кому" : "60", "sms" : "Привет"},
        "2" : {"Кому" : "61", "sms" : "Пока"},
        "3" : {"Кому" : "62", "sms" : "Андрей"}
      }`,
      smsTake: `{
        "1" : {"От_кого" : "60", "sms" : "Привет"},
        "2" : {"От_кого" : "61", "sms" : "Пока"},
        "3" : {"От_кого" : "62", "sms" : "Андрей"}
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
        "1" : {"Кому" : "60", "sms" : "Привет"},
        "2" : {"Кому" : "61", "sms" : "Пока"},
        "3" : {"Кому" : "62", "sms" : "Андрей"}
      }`,
      smsTake: `{
        "1" : {"От_кого" : "60", "sms" : "Привет"},
        "2" : {"От_кого" : "61", "sms" : "Пока"},
        "3" : {"От_кого" : "62", "sms" : "Андрей"}
      }`
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
