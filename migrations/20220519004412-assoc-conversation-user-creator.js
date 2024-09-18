'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('conversations', {
      type: 'foreign key',
      fields: ['creatorId'],
      name: 'conversation_creator_association',
      onDelete: 'cascade',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('conversations', 'conversation_creator_association' )
  }
};
