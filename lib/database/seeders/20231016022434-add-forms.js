'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('form', [{
      user_id: 3,
      form_name: 'Sistema de apoyos',
      form_description: 'Formulario para registro de sistema de apoyos',
      form_departamento: 'Departamento de prueba',
      form_type: 'sistema_de_apoyos',
      form_createdAt: new Date(),
      form_updatedAt: new Date()
    }, {
      user_id: 3,
      form_name: 'Matriz MEDDI',
      form_description: 'Formulario para registro de la matriz MEDDI',
      form_departamento: 'Departamento de prueba',
      form_type: 'matriz_meddi',
      form_createdAt: new Date(),
      form_updatedAt: new Date()
    }], {});
  },
  async down(queryInterface, _Sequelize) {
    // await queryInterface.bulkDelete('form', null, {});
  }
};
//# sourceMappingURL=20231016022434-add-forms.js.map