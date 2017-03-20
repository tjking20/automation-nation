"use strict";

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("law", {
      law_ref_id: DataTypes.STRING,
      law_state: DataTypes.STRING,
      law_district: DataTypes.STRING,
      law_description: DataTypes.TEXT,
      law_vote_period: DataTypes.INTEGER,
      law_votes_yes: DataTypes.INTEGER,
      law_votes_no: DataTypes.INTEGER,
      law_politician_vote: DataTypes.INTEGER,
      law_politician_explanation: DataTypes.TEXT,
      law_resources: DataTypes.TEXT,
      activity: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE
  }, {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

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
      tableName: 'laws',

      classMethods: {}
  });
};
