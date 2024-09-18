'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
      userId: 2,
      body: "Hi nicoDann. It's been really great to use this site no?  Wonderful UI and fast.  I hope that one day I can learn to build great sites like this!  Would you like to sign up for a bootcamp too?  I mean, not the athletic kind lol!",
      conversationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', null, {});
  }
};
