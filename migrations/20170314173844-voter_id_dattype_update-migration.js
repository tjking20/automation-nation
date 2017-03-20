'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.changeColumn(
          'voters',
          'voter_id',
          {
              type: Sequelize.STRING
          }
      );
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.changeColumn(
          'voters',
          'voter_id',
          {
              type: Sequelize.INTEGER
          }
      );
  }
};
