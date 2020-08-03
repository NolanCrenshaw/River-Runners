'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicles', [
      { 
        userId: 1,
        vehicleName: "Toyota Tacoma",
        type: "truck",
        maxOccupancy: 3,
        spriteId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehicles', null, {})
  }
};
