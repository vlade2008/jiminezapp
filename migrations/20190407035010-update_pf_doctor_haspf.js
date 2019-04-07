'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Patients',
      'pf_has',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      }
    )
  },
};
