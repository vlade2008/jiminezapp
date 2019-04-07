'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Patients',
      'pf_philhealth_has',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      }
    )
  },
};
