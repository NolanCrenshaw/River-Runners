'use strict';
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
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: DataTypes.STRING(50),
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
  return User;
};