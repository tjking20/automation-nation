'use strict';

var votersArray = [
    { 
      user_name: 'Voter1',
      user_id: "1Vote",
      user_email: "vt1@gmail.com",
      user_password: "password1",
      user_role: "VT",
      user_session: "SESSION1"
    },
   { 
      user_name: 'Voter2',
      user_id: "2Vote",
      user_email: "vt2@gmail.com",
      user_password: "password1",
      user_role: "VT",
      user_session: "SESSION2"
    },
    { 
      user_name: 'Politician1',
      user_id: "1Pol",
      user_email: "pl1@gmail.com",
      user_password: "password1",
      user_role: "PL",
      user_session: "SESSION1"
    },
    { 
      user_name: 'Politician2',
      user_id: "2Pol",
      user_email: "pl2@gmail.com",
      user_password: "password1",
      user_role: "PL",
      user_session: "SESSION2"
    }
];

module.exports = {

  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('users', votersArray);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users', null, {});
  }
};
