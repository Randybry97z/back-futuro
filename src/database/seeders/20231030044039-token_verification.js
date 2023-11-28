  'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('token_verifications', [
      {
        token_uniqueString: 'tokenPruebaeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk4MjE0MDM1LCJleHAiOjE2OTgzMDA0MzV9.PmmPfocA25r7K4DoYVNEaJJtMVoT8WBfurcjrCEpppU',
        user_id: 1,
        token_createdAt: new Date(),
        token_expiredAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('token_verifications', null, {});
  }
};
