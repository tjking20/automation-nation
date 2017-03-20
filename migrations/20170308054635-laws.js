'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('laws',
      {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
          },
          law_ref_id: {
              type: Sequelize.STRING,
              allowNull: false
          },
          law_state: {
              type: Sequelize.STRING,
              allowNull: false
          },
          law_district: {
              type: Sequelize.STRING,
              allowNull: false
          },
          law_description: {
              type: Sequelize.TEXT,
              allowNull: false
          },
          law_vote_period: {
              type: Sequelize.INTEGER,
              allowNull: false
          },
          law_votes_yes: {
              type: Sequelize.INTEGER
          },
          law_votes_no: {
              type: Sequelize.INTEGER
          },
          law_politician_vote: {
              type: Sequelize.STRING
          },
          law_politician_explanation: {
              type: Sequelize.TEXT
          },
          law_created_at: {
              type: Sequelize.DATE,
              allowNull: false
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('laws');
  }
};
