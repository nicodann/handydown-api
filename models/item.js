'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.user, { allowNull: false, onDelete: 'cascade'  });
      models.user.hasMany(Item, {onDelete: 'cascade' }); // FK `userId` defined in Items table
    }
  }
  Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    offered: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'item',
  });
  return Item;
};