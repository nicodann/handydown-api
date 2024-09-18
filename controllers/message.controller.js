const { Op } = require("sequelize");
const db = require('../models');
const Conversation = db.conversation;
const Message = db.message;
const Item = db.item;
const User = db.user;

// Create a new conversation if one doesn't already exist
// then create a new message
exports.create = async (req, res) => {
  const { itemId, userId, otherUserId, body } = req.body;
  try {
    const [conversation, created] = await Conversation.findOrCreate({
      where: {
        itemId: itemId,
        [Op.or]: [
          {[Op.and] : [
            {creatorId: userId},
            {receiverId: otherUserId}
          ]},
          {[Op.and] : [
            {creatorId: otherUserId},
            {receiverId: userId}
          ]}
        ]
      },
      defaults: {
        creatorId: userId,
        receiverId: otherUserId,
        itemId: itemId
      }
    });
  
    console.log('newConvo:', conversation);
    console.log('CREATED:', created);
    const message = await Message.create({
      body: body,
      conversationId: conversation.id,
      userId: userId
    });
    const updatedConversation = await Conversation.findByPk(conversation.id, {
      include:[
        Item,
        Message,
        {model: User, as: 'creator'},
        {model: User, as: 'receiver'}
      ]
    });
    // refresh the updatedAt field for the conversation so it shows up at the top of My Messages 
    updatedConversation.changed('updatedAt', true);
    await updatedConversation.update({
      updatedAt: new Date() 
    });
    
    return res.json(updatedConversation);
  } catch(err) {
    console.log(err);
    return res.status(500).send(err);
  } 
};
