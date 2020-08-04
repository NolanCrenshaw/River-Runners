'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trips', [
      { 
        time: "2020-08-20 10:00:00 EST",
        riverId: 1,
        tripLeaderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trips', null, {})
  }
};
