'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Softball bag",
      description: "My daughter is off to university and her team will provide her with a new bag. So this one is no longer needed",
      image: "http://localhost:8080/images/softball-bag.jpg",
      userId: 3,
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
