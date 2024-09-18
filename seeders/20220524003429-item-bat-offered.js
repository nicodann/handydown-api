'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Baseball Bat",
      description: "Rawlins 2020 Raptor baseball bat, size 10 youth.  Slightly used condition.  Sat in our shed mostly.",
      image: "http://localhost:8080/images/bat3.jpg",
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
