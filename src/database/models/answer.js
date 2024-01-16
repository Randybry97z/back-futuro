'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Participante, {
        foreignKey: 'participante_id'
      });
      Answer.belongsTo(models.Question, {
        foreignKey: 'question_id'
      });
    }
  }
  const currentDate = new Date();
  Answer.init({
    answer_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    answer_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer_date: {
      type: DataTypes.DATE
    },
    answer_createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue:`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
    }
  }, {
    sequelize,
    modelName: 'Answer',
    tableName: 'answer',
    timestamps: true,
    paranoid: true,
    createdAt: false,
    updatedAt: 'answer_updatedAt',
    deletedAt: 'answer_deletedAt',
  });
  return Answer;
};