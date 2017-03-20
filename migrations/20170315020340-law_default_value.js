'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'laws',
        'law_votes_yes',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'laws',
        'law_votes_no',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false
        }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('laws', 'law_votes_yes'),
      queryInterface.removeColumn('laws', 'law_votes_no')
    ];
  }
};