'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('voter_votes',
      {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
          },
          voter_votes_name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          voter_votes_id: {
              type: Sequelize.STRING,
              allowNull: false
          },
          voter_votes_party: {
              type: Sequelize.STRING,
              allowNull: false
          },
          voter_votes_district: {
              type: Sequelize.INTEGER,
              allowNull: false
          },
          voter_votes_law_ref_id: {
              type: Sequelize.STRING,
              allowNull: false
          },
          voter_votes_vote: {
              type: Sequelize.STRING,
              allowNull: false
          },
          voter_votes_law_time_period: {
              type: Sequelize.INTEGER,
              allowNull: false
          },
          created_at: {
              type: Sequelize.DATE,
              allowNull: false
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('voter_votes');
  }
};