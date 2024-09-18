'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Kids Bike Helmet",
      description: "Got this helmet but it was always too small and never returned.  Like new condition.",
      image: "http://localhost:8080/images/kids_bike_helmet.png",
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
