'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Cleats",
      description: "We are looking for a pair of soccer cleats that are size 4.5 youth.",
      image: "http://localhost:8080/images/wanted-adTwo.png",
      userId: 2,
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
