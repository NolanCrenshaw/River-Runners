'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roster = sequelize.define('Roster', {
    attendeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tripId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Roster.associate = function(models) {
    Roster.belongsTo(models.Attendee, { foreignKey: 'attendeeId' });
    Roster.belongsTo(models.Trip, { foreignKey: 'tripId' })
  };
  return Roster;
};