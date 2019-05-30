'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Medicines',
      'time',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
