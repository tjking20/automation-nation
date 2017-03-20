'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.changeColumn(
          'laws',
          'law_politician_vote',
          {
              type: Sequelize.STRING  
          }
      );
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.changeColumn(
          'laws',
          'law_politician_vote',
          {
              type: Sequelize.INTEGER
          }
      );
  }
};
