'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
      userId: 4,
      body: "My man Todd!  Gimme those cleats!  I need to run faster!!",
      conversationId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', null, {});
  }
};