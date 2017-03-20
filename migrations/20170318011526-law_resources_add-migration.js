'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'laws', 'law_resources', 
      {
        type: Sequelize.TEXT,
        allowNull: false
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('laws', 'law_resources')
  }
};