'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('conversations', {
      type: 'foreign key',
      fields: ['receiverId'],
      name: 'conversations_receiver_association',
      onDelete: 'cascade',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('conversations', 'conversations_receiver_association' )
  }
};
