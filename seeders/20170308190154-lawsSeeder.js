'use strict';

var lawsArray = [
    {
        law_ref_id: (Math.floor(Math.random() * 500000)).toString(),
        law_state: 'NJ',
        law_district: 'Moo Moo',
        law_description: 'Anti-YOLO',
        law_vote_period: 90,
        law_votes_yes: 0,
        law_votes_no: 0,
        law_politician_vote: 0,
        law_politician_explanation: 'Prevent YOLOing in the state of NJ',
        law_created_at: new Date()
    },
    {
        law_ref_id: (Math.floor(Math.random() * 500000)).toString(),
        law_state: 'PA',
        law_district: 'NU NU',
        law_description: 'Ban The sale of Stuff',
        law_vote_period: 30,
        law_votes_yes: 0,
        law_votes_no: 0,
        law_politician_vote: 0,
        law_politician_explanation: 'Make america great again!',
        law_created_at: new Date()
    },
    {
        law_ref_id: (Math.floor(Math.random() * 500000)).toString(),
        law_state: 'TX',
        law_district: 'OH NO',
        law_description: 'Create more Pavans',
        law_vote_period: 120,
        law_votes_yes: 956,
        law_votes_no: 0,
        law_politician_vote: 52,
        law_politician_explanation: 'Make more Pavans in the United States!',
        law_created_at: new Date()
    }
];

module.exports = {

  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('laws', lawsArray);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('laws', null, {});
  }
};
