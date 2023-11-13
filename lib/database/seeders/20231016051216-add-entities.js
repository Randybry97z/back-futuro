"use strict";

// 'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    // await queryInterface.bulkInsert('entity', [
    //   {
    //     participante_id: 1,
    //     entity_name: 'Entidad ejemplo 1',
    //     entity_city: 'Cd. Victoria',
    //     entity_address: 'Calle Benito Juarez',
    //     entity_representative_name: 'Entidad #1',
    //     entity_representative_mail: 'entidad_1@mail.com',
    //     entity_representative_phone: '1234567890',
    //     entity_createdAt: new Date(),
    //     entity_updatedAt: new Date()
    //   }
    // ], {});
  },
  async down(queryInterface, _Sequelize) {
    // await queryInterface.bulkDelete('entity', null, {});
  }
};