'use strict';
const bcrypt = require('bcrypt');

const hashedPass = bcrypt.hashSync('secret', 10);

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('users', [{
      username: 'federerFan',
      email: 'roger@me.com',
      password: hashedPass,
      location: 'Oshawa, ON',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
