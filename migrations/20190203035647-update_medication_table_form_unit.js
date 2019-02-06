'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Medicines',
      'form_unit',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
