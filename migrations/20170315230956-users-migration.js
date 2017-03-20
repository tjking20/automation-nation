'use strict';
// 3/15 added migration for users -tim

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('users',
      {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
          },
          user_name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          user_id: {
              type: Sequelize.STRING,
              allowNull: false
          },
          user_email: {
              type: Sequelize.STRING,
              allowNull: false
          },
          user_password: {
              type: Sequelize.STRING,
              allowNull: false
          },
          user_role: {
              type: Sequelize.STRING,
              allowNull: false
          },
          user_session: {
              type: Sequelize.STRING,
              allowNull: false
          },
          created_at: {
              type: Sequelize.DATE,
              allowNull: false
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('users');
  }
};