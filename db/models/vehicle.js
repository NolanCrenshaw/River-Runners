'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vehicleName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    maxOccupancy: DataTypes.INTEGER,
    maxHaul: DataTypes.INTEGER,
    spriteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.User, { foreignKey: 'userId' });
    Vehicle.belongsTo(models.Sprite, { foreignKey: 'spriteId' });
    Vehicle.hasMany(models.Attendee, { foreignKey: 'vehicleId' });
  };
  return Vehicle;
};