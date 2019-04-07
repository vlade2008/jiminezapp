'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Patients',
      'pf_philhealth',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
