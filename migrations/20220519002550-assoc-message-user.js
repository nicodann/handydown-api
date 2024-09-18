'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('messages', {
      type: 'foreign key',
      fields: ['userId'],
      name: 'message_user_association',
      onDelete: 'cascade',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('messages', 'message_user_association' )
  }
};
