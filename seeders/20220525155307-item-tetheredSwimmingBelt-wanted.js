'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Tethered swimming belt",
      description: "Principal Skinner says I have to do tethered swimming as my gym activity even though I don't wanna do tethered swimming.",
      image: "http://localhost:8080/images/wanted-adTwo.png",
      userId: 6,
      offered: false,
      delivered: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items', null, {});
  }
};
