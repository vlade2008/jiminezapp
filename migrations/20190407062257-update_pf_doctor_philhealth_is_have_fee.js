'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Patients',
      'fee',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      }
    )
  },
};
