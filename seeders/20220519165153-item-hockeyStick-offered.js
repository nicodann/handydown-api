'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Hockey Stick",
      description: "Built for lightning quick shots that you don't see coming; the Sherwood REKKER Element 1 is the ultimate stick for the sniper. The new VRF X blade reinforcement increases durability ensures you're shots go exactly where you want it, when you want it.",
      image: "http://localhost:8080/images/hockey-stick.jpg",
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
