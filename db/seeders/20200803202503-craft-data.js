'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Crafts', [
      { 
        userId: 1, 
        craftName: "Esquif Detonator",
        type: "canoe",
        maxOccupancy: 1,
        spriteId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Crafts', null, {})
  }
};
