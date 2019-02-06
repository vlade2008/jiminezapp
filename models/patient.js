'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    contact_number: DataTypes.STRING,
    weight: DataTypes.STRING,
  });

  Patient.associate = function (models) {
    models.Patient.hasMany(models.Order);
  };

  return Patient;
};