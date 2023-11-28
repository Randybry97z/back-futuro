'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('user', 'user_avatar', {
      type: Sequelize.TEXT('long')
    });
  }
};