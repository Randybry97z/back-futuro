'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('user', [{
      role_id: 1,
      company_id: 1,
      user_name: 'Jorge',
      user_lastName: 'Aguilar',
      user_mail: 'jorge@dev.com',
      user_password: '12345',
      user_avatar: 'https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/jorgeDev%2Favatars%2Fdefault.png?alt=media&token=597aa2d4-7ea6-477f-afd8-b278aca71490',
      user_verified: 0,
      user_createdAt: new Date(),
      user_updatedAt: new Date()
    }, {
      role_id: 1,
      company_id: 1,
      user_name: 'Saul',
      user_lastName: 'Sandoval',
      user_mail: 'saul@dev.com',
      user_password: '12345',
      user_avatar: 'https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/jorgeDev%2Favatars%2Fdefault.png?alt=media&token=597aa2d4-7ea6-477f-afd8-b278aca71490',
      user_verified: 0,
      user_createdAt: new Date(),
      user_updatedAt: new Date()
    }, {
      role_id: 1,
      company_id: 1,
      user_name: 'Manuel',
      user_lastName: 'Castillo',
      user_mail: 'manu@dev.com',
      user_password: '12345',
      user_avatar: 'https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/jorgeDev%2Favatars%2Fdefault.png?alt=media&token=597aa2d4-7ea6-477f-afd8-b278aca71490',
      user_verified: 0,
      user_createdAt: new Date(),
      user_updatedAt: new Date()
    }], {});
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
//# sourceMappingURL=20231011050257-add-users.js.map