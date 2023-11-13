'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('participante', {
      participante_id: {
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
      participante_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      participante_lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      participante_second_surname: {
        type: Sequelize.STRING,
      },
      participante_birthday: {
        type: Sequelize.DATE
      },
      participante_age: {
        type: Sequelize.INTEGER
      },
      participante_mail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      participante_phone: {
        type: Sequelize.STRING
      },
      participante_code: {
        type: Sequelize.STRING
      },
      participante_gender: {
        type: Sequelize.STRING
      },
      participante_nationality: {
        type: Sequelize.STRING
      },
      participante_language: {
        type: Sequelize.STRING
      },
      participante_scholarship: {
        type: Sequelize.STRING
      },
      participante_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      participante_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      participante_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('participante');
  }
};