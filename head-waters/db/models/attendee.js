'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendee = sequelize.define('Attendee', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    meetUpLocation: DataTypes.STRING(100),
    craftId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER,
    shuttleDriver: DataTypes.BOOLEAN
  }, {});
  Attendee.associate = function(models) {
    Attendee.belongsTo(models.User, { foreignKey: 'userId' });
    Attendee.belongsTo(models.Craft, { foreignKey: 'craftId' });
    Attendee.belongsTo(models.Vehicle, { foreignKey: 'vehicleId' });
    Attendee.hasMany(models.Roster, { foreignKey: 'attendeeId' });
  };
  return Attendee;
};