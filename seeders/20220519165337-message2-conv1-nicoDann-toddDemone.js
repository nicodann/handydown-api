'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
      userId: 1,
      body: "Hi toddDemone, yes it's still available. When are you available to pick it up?",
      conversationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', null, {});
  }
};
