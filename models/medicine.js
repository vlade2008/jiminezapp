'use strict';
module.exports = (sequelize, DataTypes) => {
  var Medicine = sequelize.define('Medicine', {
    name: DataTypes.STRING,
    brandname: DataTypes.STRING,
    form_unit: DataTypes.STRING,
    dispense: DataTypes.STRING,
    take: DataTypes.STRING,
    sig: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Medicine;
};