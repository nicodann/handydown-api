'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('conversations', [{
      creatorId: 2,
      receiverId: 1,
      itemId: 1,
      readByReceiver: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('conversations', null, {});
  }
};
