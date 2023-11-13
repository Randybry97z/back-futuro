'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'role',
          key: 'role_id'
        },
        defaultValue: 1
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'company',
          key: 'company_id'
        },
        defaultValue: 1
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_mail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_password: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      user_avatar: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      user_birthday: {
        allowNull: true,
        type: Sequelize.DATE
      },
      verified: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      user_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('user');
  }
};