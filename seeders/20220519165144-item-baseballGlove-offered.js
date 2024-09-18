'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Baseball Glove",
      description: "The Mizuno MVP Prime SE series is the ideal glove choice for players looking to advance their game, while adding a little swagger with pro-style color pop to their glove.",
      image: "http://localhost:8080/images/glove2.jpg",
      userId: 1,
      offered: true,
      delivered: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items', null, {});
  }
};
