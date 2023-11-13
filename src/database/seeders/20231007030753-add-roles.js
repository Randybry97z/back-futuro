'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('role', [
      {
        role_name: 'user',
        role_description: 'Basic user',
        role_createdAt: new Date(),
        role_updatedAt: new Date()
      }, {
        role_name: 'admin',
        role_description: 'Admin user',
        role_createdAt: new Date(),
        role_updatedAt: new Date()
      }, {
        role_name: 'tecnico',
        role_description: 'Tech user',
        role_createdAt: new Date(),
        role_updatedAt: new Date()
      }, {
        role_name: 'supersu',
        role_description: 'Supersu user',
        role_createdAt: new Date(),
        role_updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('role', null, {});
  }
};
