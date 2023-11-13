'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('form', {
      form_id: {
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
        }
      },
      form_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      form_description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      form_departamento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      form_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      form_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      form_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      form_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('form');
  }
};