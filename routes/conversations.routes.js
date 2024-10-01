const verifyToken = require("../middleware/authMiddleware.js");

module.exports = app => {
  const conversations = require("../controllers/conversation.controller.js");
  const router = require("express").Router();
  // Retrieve all conversations belonging to a User
  router.get("/by/user/:userId", verifyToken, conversations.getByUserId);

  //Mark a convo as 'read' (read = true)
  router.put("/:conversationId", verifyToken, conversations.markAsRead);

  // Create a new Conversation and its first message
  // router.post("/", conversations.create);

  app.use('/api/conversations', router);
};