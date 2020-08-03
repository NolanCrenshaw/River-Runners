'use strict';
module.exports = (sequelize, DataTypes) => {
  const River = sequelize.define('River', {
    riverName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    flow: DataTypes.INTEGER,
    class: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    description: DataTypes.STRING(255),
    riverPicture: DataTypes.STRING(255)
  }, {});
  River.associate = function(models) {
    River.hasMany(models.Access, { foreignKey: 'riverId' });
    River.hasMany(models.Trip, { foreignKey: 'riverId' });
  };
  return River;
};