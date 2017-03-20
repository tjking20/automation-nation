'use strict';

var votersArray = [
    { 
      voter_name: 'Voter1',
      voter_id: 1,
      voter_party: "republican",
      voter_district: 1
      },
    { 
      voter_name: 'Voter2',
      voter_id: 2,
      voter_party: "democrat",
      voter_district: 1
    }
];

module.exports = {

  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('voters', votersArray);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('voters', null, {});
  }
};