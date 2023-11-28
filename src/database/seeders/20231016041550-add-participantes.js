// 'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('participante', [
      {
        user_id: 1,
        participante_name: 'Juan Ramon',
        participante_lastname: 'Martinez',
        participante_second_surname: 'Ramirez',
        participante_birthday: new Date(1995, 11, 17),
        participante_age: 18,
        participante_mail: 'ramon_18@mail.com',
        participante_code: 'P-001',
        participante_gender: 'Masculino',
        participante_nationality: 'MEX',
        participante_language: 'Español',
        participante_scholarship: 'Primaria',
        participante_createdAt: new Date(),
        participante_updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    // await queryInterface.bulkDelete('participante', null, {});
  }
};
