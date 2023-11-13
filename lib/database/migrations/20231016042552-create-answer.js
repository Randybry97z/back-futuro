'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('answer', {
      answer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      participante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'participante',
          key: 'participante_id'
        }
      },
      question_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'question',
          key: 'question_id'
        }
      },
      answer_value: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      answer_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      answer_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      answer_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('answer');
  }
};