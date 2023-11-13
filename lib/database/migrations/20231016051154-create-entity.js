'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entity', {
      entity_id: {
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
      entity_name: {
        type: Sequelize.STRING
      },
      entity_city: {
        type: Sequelize.STRING
      },
      entity_address: {
        type: Sequelize.TEXT
      },
      entity_representative_name: {
        type: Sequelize.STRING
      },
      entity_representative_mail: {
        type: Sequelize.STRING
      },
      entity_representative_phone: {
        type: Sequelize.STRING
      },
      entity_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      entity_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      entity_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('entity');
  }
};