'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Medicines',
      'dispense',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
