'use strict';
module.exports = (sequelize, DataTypes) => {
  var Template = sequelize.define('Template', {
    name: DataTypes.STRING,
    data: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Template;
};