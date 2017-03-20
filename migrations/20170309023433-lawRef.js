'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('law_references',
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
              law_href: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              law_href_type: {
                  type: Sequelize.STRING,
                  allowNull: false
              },
              created_at: {
                  type: Sequelize.DATE,
                  allowNull: false
              }
          });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('law_references');
  }
};
