"use strict";

module.exports = function(sequelize, DataTypes) {
  var voter_vote = sequelize.define("voter", {
    voter_vote_name: DataTypes.STRING,
    voter_vote_id: DataTypes.INTEGER,
    voter_vote_party: DataTypes.STRING,
    voter_vote_district: DataTypes.INTEGER,
    voter_vote_law_ref_id: DataTypes.INTEGER,
    voter_vote_vote_time_period: DataTypes.INTEGER
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
      //timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
      //paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'voter_votes'
  });

  return voter_vote;
};