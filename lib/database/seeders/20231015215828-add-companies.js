'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('company', [{
      company_name: 'Albergue Covadonga',
      company_description: 'Albergue Covadonga',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Asociación Albeniz',
      company_description: 'asocicacion_albeniz',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Cáritas Madrid',
      company_description: 'caritas_madrid',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Fundación Putxel',
      company_description: 'fundacion_putxel',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Hijas de la Caridad Madrid',
      company_description: 'hijas_caridad_madrid',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Hijas de la Caridad Samanca',
      company_description: 'hijas_caridad_salamanca',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Luz Casanova',
      company_description: 'luz_casanova',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'San Martín de Porres',
      company_description: 'sanmartin_porres',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Sercade Madrid',
      company_description: 'secade_madrid',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'Sercade Zaragoza',
      company_description: 'secade_zaragoza',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'SJD Barcelona',
      company_description: 'sjd_barcelona',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'SJD Madrid',
      company_description: 'sjd_madrid',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }, {
      company_name: 'SJD Valencia',
      company_description: 'sjd_valencia',
      company_address: '',
      company_code: '',
      company_createdAt: new Date(),
      company_updatedAt: new Date()
    }], {});
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('company', null, {});
  }
};
//# sourceMappingURL=20231015215828-add-companies.js.map