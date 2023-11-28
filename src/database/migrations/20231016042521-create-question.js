'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      question_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      form_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'form',
          key: 'form_id'
        }
      },
      question_text: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      question_type: {
        type: Sequelize.STRING,
        allowNull: false,
        max: 100,
        defaultValue: 'text'
      },
      question_options: {
        type: Sequelize.TEXT
      },
      question_subtitle: {
        type: Sequelize.TEXT
      },
      question_instruccions: {
        type: Sequelize.TEXT
      },
      question_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      question_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      question_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('question');
  }
};