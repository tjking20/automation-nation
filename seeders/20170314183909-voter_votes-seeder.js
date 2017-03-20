'use strict';


var voterVotesArray = [
    {
      voter_votes_name: "Voter1",           
      voter_votes_id: '1Vote',            
      voter_votes_party: 'republican',     
      voter_votes_district: 1,
      voter_votes_law_ref_id: "4",
      voter_votes_vote: "yes",          
      voter_votes_law_time_period: 201701
        
    },
    {
      voter_votes_name: "Voter2",           
      voter_votes_id: '2Vote',            
      voter_votes_party: 'democrat',     
      voter_votes_district: 1,
      voter_votes_law_ref_id: "4",
      voter_votes_vote: "yes",              
      voter_votes_law_time_period: 201701
        
    }
];

module.exports = {

  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('voter_votes', voterVotesArray);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('voter_votes', null, {});
  }
};
