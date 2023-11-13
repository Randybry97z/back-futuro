'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('token_verifications', {
      token_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'user_id'
        },
        defaultValue: 1
      },
      token_uniqueString: {
        type: Sequelize.STRING
      },
      token_createdAt: {
        type: Sequelize.DATE
      },
      token_updatedAt: {
        type: Sequelize.DATE
      },
      token_expiredAt: {
        type: Sequelize.DATE
      },
      token_deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('token_verifications');
  }
};