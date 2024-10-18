'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const {Umzug, SequelizeStorage} = require('umzug');

const sequelize = new Sequelize(config)

const migrationsGlob = path.join(__dirname, '../migrations/*.js')
const seedersGlob = [path.join(__dirname, '../seeders/*.js')]

// With help from: https://github.com/sequelize/umzug/issues/488

const umzugMigrations = new Umzug({
  migrations: { 
    glob: migrationsGlob,
    resolve: ({ name, path: migrationPath }) => {
      const migration = require(migrationPath)
      console.log("Loaded migration:", name)
      return { 
        name, 
        up: async () => {
          const queryInterface = sequelize.getQueryInterface();
          console.log("Running migration:", name)
          return  migration.up(queryInterface, Sequelize)
        }, 
        down: 
          async () => {
            const queryInterface = sequelize.getQueryInterface();
            return migration.down(queryInterface, Sequelize) 
          }
      }
    },
  },
  storage: new SequelizeStorage({ sequelize }),
  logger: console
})

const runMigrations = async () => {
  try {
    const executedMigrations = await umzugMigrations.up();

    if (executedMigrations.length === 0) {
      console.log('No migrations were executed.');
    } else {
      console.log(`Executed migrations: ${executedMigrations.map(m => m.name).join(', ')}`);
    }
  } catch (error) {
    console.error('Error executing migrations:', error);
  }
};

const umzugSeeders = new Umzug({
  migrations: { 
    glob: seedersGlob,
    resolve: ({ name, path: migrationPath }) => {
      const migration = require(migrationPath)
      console.log("Loaded seeder:", name)
      return { 
        name, 
        up: async () => {
          const queryInterface = sequelize.getQueryInterface();
          console.log("Running seeder:", name)
          return  migration.up(queryInterface, Sequelize)
        }, 
        down: 
          async () => {
            const queryInterface = sequelize.getQueryInterface();
            return migration.down(queryInterface, Sequelize) 
          }
      }
    },
  },
  storage: new SequelizeStorage({ sequelize }),
  logger: console
})

const runSeeders = async () => {
  try {
    const executedSeeders = await umzugSeeders.up();

    if (executedSeeders.length === 0) {
      console.log('No Seeders were executed.');
    } else {
      console.log(`Executed Seeders: ${executedSeeders.map(m => m.name).join(', ')}`);
    }
  } catch (error) {
    console.error('Error executing seeders:', error);
  }
};

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

module.exports = { ...db, runMigrations, runSeeders };
