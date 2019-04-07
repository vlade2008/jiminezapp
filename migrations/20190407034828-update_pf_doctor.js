'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Patients',
      'pf',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
