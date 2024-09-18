module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const router = require("express").Router();

  router.get("/:id", users.show);

  router.post("/", users.create);

  router.post('/login', users.login);

  // router.post('/logged_in', users.logged_in)

  // router.post('/logout', users.logout);
  
  app.use('/api/users', router);
}