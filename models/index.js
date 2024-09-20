'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const {Umzug, SequelizeStorage} = require('umzug');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (env === 'development') {
  console.log("config.development")
  sequelize = new Sequelize(config);
} else {
  console.log("other")
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  });
}

// const umzug = new Umzug({
//   migrations: {glob: '../migrations/*.js'},
//   constext: sequelize.getQueryInterface(),
//   storage: new SequelizeStorage({sequelize}),
//   logger: console
// })

// await umzug.up()

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
