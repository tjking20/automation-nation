'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('voters', 'voter_created_at', 'created_at');
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('voters', 'created_at', 'voter_created_at');
  }
};
