'use strict';
module.exports = (sequelize, DataTypes) => {
  var Medicine = sequelize.define('Medicine', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Medicine;
};