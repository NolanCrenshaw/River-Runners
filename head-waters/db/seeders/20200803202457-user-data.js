'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { 
        userName: "RaftGuide", 
        email: "test@gmail.com", 
        hashedPassword: "$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe",
        firstName: "Nolan",
        lastName: "Crenshaw",
        zipCode: 37409,
        skillLevel: 5,
        about: "A former rafting guide.",
        spriteId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
