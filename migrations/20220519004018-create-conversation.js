'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('conversations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      readByCreator: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      readByReceiver: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      creatorId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE' 
      },
      receiverId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE' 
      },
      itemId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE' 
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('conversations');
  }
};
