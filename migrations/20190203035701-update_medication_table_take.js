'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Medicines',
      'take',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
};
