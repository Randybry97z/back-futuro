// 'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('institutionalization_history', [
      {
        participante_id: 1,
        history_acommodation_time: 'Entre 1 y 6 meses',
        history_previous_acommodation: 'En un centro de menores (tutela)',
        history_previous_ethos: 'Calle o emergencia',
        history_quantity_programs: '2 programas',
        history_nohome_state: 'Si',
        history_assault_state: 'Si',
        history_social_profile: 'Proceso migratorio en mayoría de edad',
        history_problematic: 'Abuso de consumo de drogas sin tratamiento',
        history_entity: 'Albergue Covadonga',
        history_register_date: '15 de agosto',
        history_updown_date: '20 de septiembre',
        history_updown_reason: 'Expulsión',
        history_createdAt: new Date(),
        history_updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    // await queryInterface.bulkDelete('institutionalization_history', null, {});
  }
};
