const { Op } = require("sequelize");
const db = require('../models');
const Conversation = db.conversation;
const Item = db.item;
const Message = db.message;
const User = db.user;

// Retrieve all conversations belonging to a User
exports.getByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const conversations = await Conversation.findAll({
      where: {
        [Op.or]: [ { creatorId: userId }, { receiverId: userId }],
      },
      

      include:[
        Item, 
        Message,
        {model: User, as: 'creator'},
        {model: User, as: 'receiver'}
      ],
      
      order: [
        ['updatedAt', 'DESC'],
        [Message, 'id', 'ASC']
      ]
    });
    return res.json(conversations);
  } catch (err) {
    console.log(err);
    res.status(500).send(err); 
  }
};

exports.markAsRead = async (req,res) => {
  const convId = req.params.conversationId;
  console.log("req.body", req.body)
  const columnToUpdate = {}
  columnToUpdate[req.body.readByWhom] = true;
  console.log("columnToUpdate", columnToUpdate)
  try {
    const result = await Conversation.update(
      columnToUpdate,
      {where: {id: convId}}
    )
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}
