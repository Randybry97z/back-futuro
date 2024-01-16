'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('answer', 'answer_date', {
      type: Sequelize.DATE
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('answer', 'answer_date');
  }
};
//# sourceMappingURL=20240114234212-update-aswer.js.map