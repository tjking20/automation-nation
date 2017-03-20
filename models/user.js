"use strict";
var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      user_name: DataTypes.STRING,
      user_id: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_role: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_session: DataTypes.STRING
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
      tableName: 'users',

        instanceMethods: {
          validPassword: function(password, hash, callback) {
              bcrypt.compareSync(password, this.user_password, function(err, isMatch) {
                  if(err) throw err;

                  callback(null, isMatch);
              });
          }
        },
        hooks: {
          beforeCreate: function(user, options, callback) {
              user.password = bcrypt.hash(user.password, bcrypt.genSalt(10), null);
              callback(null, options);
          }
        }
  });
    return user;

};