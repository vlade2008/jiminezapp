'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Patients',
      'weight',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
