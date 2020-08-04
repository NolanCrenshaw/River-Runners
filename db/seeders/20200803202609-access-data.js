'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accesses', [
      {  
        riverId: 1,
        name: "Dam #2",
        possiblePutIn: true,
        possibleTakeOut: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        riverId: 1,
        name: "Private Boater Takeout",
        possiblePutIn: false,
        possibleTakeOut: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        riverId: 1,
        name: "Dam #3",
        possiblePutIn: true,
        possibleTakeOut: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accesses', null, {})
  }
};
