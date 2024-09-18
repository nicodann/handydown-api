'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('conversations', {
      type: 'foreign key',
      fields: ['itemId'],
      name: 'conversations_item_association',
      onDelete: 'cascade',
      references: {
        table: 'items',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('conversations', 'conversations_item_association' )
  }
};
