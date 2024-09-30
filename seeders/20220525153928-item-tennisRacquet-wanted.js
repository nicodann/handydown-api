'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Tennis racket",
      description: "My son wants to sign up for a tennis camp this summer. If you have a racket that is a suitable size for an 11-year old we would love to see it. Thanks so much.",
      image: "/images/wanted-adTwo.png",
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
