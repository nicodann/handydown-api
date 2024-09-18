'use strict';
const bcrypt = require('bcrypt');

const hashedPass = bcrypt.hashSync('secret', 10);

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username: 'elBarto',
      email: 'krusty4eva@example.org',
      password: hashedPass,
      location: 'Shelbyville, ON',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
