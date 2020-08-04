'use strict';
module.exports = (sequelize, DataTypes) => {
  const Craft = sequelize.define('Craft', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    craftName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    maxOccupancy: DataTypes.INTEGER,
    spriteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Craft.associate = function(models) {
    Craft.belongsTo(models.User , { foreignKey: 'userId' });
    Craft.belongsTo(models.Sprite , { foreignKey: 'spriteId' });
    Craft.hasMany(models.Attendee, { foreignKey: 'craftId' });
  };
  return Craft;
};