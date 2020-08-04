'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sprites', [
      { id: 1, type: 'user', name: 'user_sprite01', location: /* TODO */ '', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, type: 'craft', name: 'craft_sprite01', location: /* TODO */ '', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, type: 'vehicle', name: 'vehicle_sprite01', location: /* TODO */ '', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sprites', null, {})
  }
};
