const verifyToken = require('../middleware/authMiddleware.js')

module.exports = app => {
  const items = require("../controllers/item.controller.js");
  const router = require("express").Router();
  
  // Retrieve all items
  router.get("/", items.index);

  // Retrieve user's items
  router.get("/:user_id", verifyToken, items.show);

  // Create a new Item
  router.post("/", verifyToken, items.create);

  // Update Item with id
  router.put("/:id", verifyToken, items.update);

  // Delete a Item with id
  router.delete("/:id", verifyToken, items.destroy);

  app.use('/api/items', router);
};
// Retrieve all published items
// router.get("/published", items.findAllPublished);
// Retrieve a single Item with id
// router.get("/:id", items.findOne);