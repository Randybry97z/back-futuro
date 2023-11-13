'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('question', 'question_width', {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 1
        }, { transaction: t }),
        queryInterface.addColumn('question', 'question_group', {
          type: Sequelize.STRING,
          allowNull: true
        }, { transaction: t })
      ])
    })
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('question', 'question_width', { transaction: t }),
        queryInterface.removeColumn('question', 'question_group', { transaction: t }),
      ])
    })
  }
};