'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.user, { allowNull: false, onDelete: 'cascade'  });
      models.user.hasMany(Message, {onDelete: 'cascade' }); // FK `userId` defined in Messages table
      Message.belongsTo(models.conversation, { allowNull: false, onDelete: 'cascade'  });
      models.conversation.hasMany(Message, {onDelete: 'cascade' }); // FK `conversationId` defined in Messages table
    }
  }
  Message.init({
    body: {
      type: DataTypes.STRING, 
      alowNull: false
    }
  }, {
    sequelize,
    modelName: 'message',
  });
  return Message;
};