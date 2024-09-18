'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      name: "Kids Flippers girls age 4-5",
      description: "I'm looking for a pair of swimming flippers for my 4 year old who's desperate to try at the cottage this summer.  She generally fits big so size 5 might work.  Just thought I would check here before purchasing!  Thank you.",
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
