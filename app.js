require('dotenv').config();

const express = require('express');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.static('assets'));
app.use(morgan('dev')); // log HTTP requests and errors to console
app.use(cookieSession({ name: 'session', keys: ['key1'] }));
app.use(express.json({ extended: false })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(fileUpload());

const db = require("./models");

require("./routes/items.routes")(app);
require("./routes/users.routes")(app);
require("./routes/conversations.routes")(app);
require("./routes/messages.routes")(app);

app.get('/', (req, res) => {
  res.json({"message": 'Welcome to the HandyDown API'});
 
});

const startApp = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await db.sequelize.sync({ force: true }) 
    // await db.sequelize.sync()
    console.log('All models have been (re)created!')
    app.listen(process.env.PORT, () => {
      console.log(`HandyDown API listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startApp();
