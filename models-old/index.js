require('dotenv').config(); 
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model.js")(sequelize, DataTypes);
db.items = require("./item.model.js")(sequelize, DataTypes);
db.messages = require("./message.model.js")(sequelize, DataTypes);
db.conversations = require("./conversation.model.js")(sequelize);

// USER - ITEMS (1:n)
db.users.hasMany(db.items); // FK `userId` defined in items table
db.items.belongsTo(db.users, { allowNull: false });

// USER - MESSAGES (1:n)
db.users.hasMany(db.messages); // FK `userId` defined in messages table
db.messages.belongsTo(db.users, { allowNull: false });

// USER - CONVERSATIONS (2:n)
db.users.hasMany(db.conversations, { foreignKey: 'creatorId' });
db.users.hasMany(db.conversations, { foreignKey: 'receiverId' });
db.conversations.belongsTo(db.users, { as: 'creator', foreignKey: 'creatorId', allowNull: false });
db.conversations.belongsTo(db.users, { as: 'receiver', foreignKey: 'receiverId', allowNull: false });

// ITEM - CONVERSATIONS (1:n)
db.items.hasMany(db.conversations); // FK `itemId` defined in conversations
db.conversations.belongsTo(db.items, { allowNull: false });

// CONVERSATION - MESSAGES (1:n)
db.conversations.hasMany(db.messages); // FK `conversationId` defined in messages table
db.messages.belongsTo(db.conversations, { allowNull: false });

module.exports = db;