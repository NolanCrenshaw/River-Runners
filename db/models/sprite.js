'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sprite = sequelize.define('Sprite', {
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {});
  Sprite.associate = function(models) {
    Sprite.hasMany(models.Craft, { foreignKey: 'spriteId' });
    Sprite.hasMany(models.User, { foreignKey: 'spriteId' });
    Sprite.hasMany(models.Vehicle, { foreignKey: 'spriteId' });
  };
  return Sprite;
};