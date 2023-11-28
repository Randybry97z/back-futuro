'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company', {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      company_address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      company_code: {
        type: Sequelize.STRING
      },
      company_createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      company_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      company_deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('company');
  }
};
//# sourceMappingURL=20231015214551-create-company.js.map