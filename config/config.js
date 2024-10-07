require('dotenv').config();
module.exports = {
  development: {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "handydown_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
    "database": process.env.DB_NAME,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
}
