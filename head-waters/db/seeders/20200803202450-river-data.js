'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rivers', [
      { riverName: "Ocoee", class: 3, createdAt: new Date(), updatedAt: new Date() },
      { riverName: "Chattooga", class: 4, createdAt: new Date(), updatedAt: new Date() },

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rivers', null, {})
  }
};
