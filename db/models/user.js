'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validates: {
        isEmail: true,
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    tokenId: {
      type: DataTypes.STRING(36),
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skillLevel: DataTypes.INTEGER,
    about: DataTypes.STRING(255),
    profilePicture: DataTypes.STRING(255),
    spriteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  
  User.associate = function(models) {
    User.belongsTo(models.Sprite, { foreignKey: 'spriteId' });
    User.hasMany(models.Attendee, { foreignKey: 'userId' });
    User.hasMany(models.Craft, { foreignKey: 'userId' });
    User.hasMany(models.Trip, { foreignKey: 'tripLeaderId' });
    User.hasMany(models.Vehicle, { foreignKey: 'userId' });
  };

  User.prototype.isValid = () => true;

  User.prototype.setPassword = function (password) {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  };

  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.prototype.toSafeObject = function () {
    return {
      id: this.id,
      userName: this.userName, 
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      zipCode: this.zipCode,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }

  return User;
};