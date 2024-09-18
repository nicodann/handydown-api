'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Basketball",
      description: "Basketball is forever a game that spills off the hardwood. The Spalding All Conference Indoor-Outdoor Basketball has a durable cover that can be used on any court surface. It's fully pebbled for a firm grip.",
      image: "http://localhost:8080/images/basketball.jpg",
      userId: 2,
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
