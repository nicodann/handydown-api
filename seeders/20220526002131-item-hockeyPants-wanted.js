'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Hockey Pants",
      description: "We are looking for hockey pants that are size youth XL.",
      image: "http://localhost:8080/images/wanted-adTwo.png",
      userId: 5,
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
