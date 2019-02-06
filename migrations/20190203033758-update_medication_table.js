'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Medicines',
      'brandname',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
