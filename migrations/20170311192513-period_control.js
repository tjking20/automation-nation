'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('period_control',
      {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
          },
          period_control: {
              type: Sequelize.INTEGER,
              allowNull: false
          },
          period_control_active: {
              type: Sequelize.STRING,
              allowNull: false
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('period_control');
  }
};
