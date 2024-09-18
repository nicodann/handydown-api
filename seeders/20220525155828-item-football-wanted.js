'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Football",
      description: "I need a new football since my friend Milhouse accidentally dropped my other one off a bridge.",
      image: "http://localhost:8080/images/wanted-adTwo.png",
      userId: 7,
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
