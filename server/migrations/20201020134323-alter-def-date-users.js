'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }).then(() => {
      return queryInterface.changeColumn('users', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      })
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    }).then(() => {
      return queryInterface.changeColumn('users', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false
      })
    })
  }
};
