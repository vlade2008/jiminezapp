'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Medicines',
      'sig',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
