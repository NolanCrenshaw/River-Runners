'use strict';
module.exports = (sequelize, DataTypes) => {
  const Access = sequelize.define('Access', {
    riverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    possiblePutIn: DataTypes.BOOLEAN,
    possibleTakeOut: DataTypes.BOOLEAN
  }, {});
  Access.associate = function(models) {
    Access.belongsTo(models.River, { foreignKey: 'riverId' });
  };
  return Access;
};