'use strict';
const bcrypt = require('bcrypt');

const hashedPass = bcrypt.hashSync('secret', 10);

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username: 'ralphWiggum',
      email: 'mittens@ses.com',
      password: hashedPass,
      location: 'Springfield, ON',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
