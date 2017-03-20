'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
       queryInterface.changeColumn(
          'voter_votes',
          'voter_votes_district',
          {
              type: Sequelize.STRING,
              allowNull: false
          }
      ),
      queryInterface.changeColumn(
          'voter_votes',
          'voter_votes_law_time_period',
          {
              type: Sequelize.STRING,
              allowNull: false
          }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
        queryInterface.changeColumn(
          'voter_votes',
          'voter_votes_district',
          {
              type: Sequelize.INTEGER,
              allowNull: true
          }
      ),
      queryInterface.changeColumn(
          'voter_votes',
          'voter_votes_law_time_period',
          {
              type: Sequelize.INTEGER,
              allowNull: true
          }
      )
    ];
  }
};