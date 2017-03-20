'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('voters',
      {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
          },
          voter_name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          voter_id: {
              type: Sequelize.INTEGER,
              allowNull: false
          },
          voter_party: {
              type: Sequelize.STRING,
              allowNull: false
          },
          voter_district: {
              type: Sequelize.INTEGER,
              allowNull: false
          },
          voter_created_at: {
              type: Sequelize.DATE,
              allowNull: false
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('voters');
  }
};
