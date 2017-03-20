'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('laws', 'law_created_at', 'created_at');
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('laws', 'created_at', 'law_created_at');
  }
};
