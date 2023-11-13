'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('institutionalization_history', {
      history_id: {
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
      history_acommodation_time: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_previous_acommodation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_previous_ethos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_quantity_programs: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      history_nohome_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_assault_state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_social_profile: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      history_problematic: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_entity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_register_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_updown_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_updown_reason: {
        type: Sequelize.STRING,
        allowNull: false
      },
      history_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      history_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      history_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('institutionalization_history');
  }
};