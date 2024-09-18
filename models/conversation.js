'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    static associate(models) {
      models.user.hasMany(Conversation, { foreignKey: 'creatorId', onDelete: 'cascade' });
      models.user.hasMany(Conversation, { foreignKey: 'receiverId', onDelete: 'cascade' });
      Conversation.belongsTo(models.user, { as: 'creator', foreignKey: 'creatorId', allowNull: false, onDelete: 'cascade'  });
      Conversation.belongsTo(models.user, { as: 'receiver', foreignKey: 'receiverId', allowNull: false, onDelete: 'cascade'  });
      models.item.hasMany(Conversation, {onDelete: 'cascade' }); // FK `itemId` defined in conversations
      Conversation.belongsTo(models.item, { allowNull: false, onDelete: 'cascade'  });
    }
  }
  Conversation.init({
    readByReceiver: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    readByCreator: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'conversation',
  });
  return Conversation;
};