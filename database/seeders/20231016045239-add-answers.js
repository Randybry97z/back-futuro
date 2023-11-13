'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    // await queryInterface.bulkInsert('answer', [
    //   {
    //     participante_id: 1,
    //     question_id: 3,
    //     answer_value: 'Me llamo Juan Ramon',
    //     answer_createdAt: new Date(),
    //     answer_updatedAt: new Date()
    //   }, {
    //     participante_id: 1,
    //     question_id: 4,
    //     answer_value: 'Escuela primaria Benito Juarez',
    //     answer_createdAt: new Date(),
    //     answer_updatedAt: new Date()
    //   }
    // ], {});
  },

  async down (queryInterface, _Sequelize) {
    // await queryInterface.bulkDelete('answer', null, {});
  }
};
