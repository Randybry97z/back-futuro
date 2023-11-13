'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('role', {
      role_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role_description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      role_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      role_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      role_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('role');
  }
};
