'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('conversations', [{
      creatorId: 4,
      receiverId: 2,
      itemId: 3,
      readByReceiver: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('conversations', null, {});
  }
};
