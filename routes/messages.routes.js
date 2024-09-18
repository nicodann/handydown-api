module.exports = app => {
  const messages = require("../controllers/message.controller.js");
  const router = require("express").Router();

  // Create a new message belonging to conversation with conversationId
  router.post("/", messages.create)

  app.use('/api/messages', router);
};