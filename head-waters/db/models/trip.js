'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    riverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tripLeaderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Trip.associate = function(models) {
    Trip.belongsTo(models.River, { foreignKey: 'riverId' });
    Trip.belongsTo(models.User, {foreignKey: 'tripLeaderId' });
    Trip.hasMany(models.Roster, { foreignKey: 'tripId' });
  };
  return Trip;
};