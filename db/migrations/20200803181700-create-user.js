'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: Sequelize.STRING(60).BINARY,
        allowNull: false,
      },
      tokenId: {
        type: Sequelize.STRING(36),
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(50)
      },
      zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      skillLevel: {
        type: Sequelize.INTEGER
      },
      about: {
        type: Sequelize.STRING(255)
      },
      profilePicture: {
        type: Sequelize.STRING(255)
      },
      spriteId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};