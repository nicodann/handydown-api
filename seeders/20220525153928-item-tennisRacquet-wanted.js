'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Tennis racquet",
      description: "My son wants to sign up for a tennis camp this summer. If you have a racquet that is a suitable size for an 11-year old we would love to see it. Thanks so much.",
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
