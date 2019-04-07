'use strict';
module.exports = (sequelize, DataTypes) => {
  var Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    contact_number: DataTypes.STRING,
    weight: DataTypes.STRING,
    pf: DataTypes.STRING,
    pf_has: DataTypes.BOOLEAN,
    pf_philhealth: DataTypes.STRING,
    pf_philhealth_has: DataTypes.BOOLEAN,
    fee: DataTypes.BOOLEAN,
  });

  Patient.associate = function (models) {
    models.Patient.hasMany(models.Order);
  };

  return Patient;
};