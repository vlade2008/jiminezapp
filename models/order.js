'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    order: DataTypes.STRING,
    dateOrder: DataTypes.DATE,
  });


  Order.associate = function (models) {
    models.Order.belongsTo(models.Patient, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Order;
};