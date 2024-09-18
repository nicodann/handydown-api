'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('items', {
      type: 'foreign key',
      fields: ['userId'],
      name: 'item_user_association',
      onDelete: 'cascade',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('items', 'item_user_association' )
  }
};
