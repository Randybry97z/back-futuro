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
  Answer.init({
    answer_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    answer_value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Answer',
    tableName: 'answer',
    timestamps: true,
    paranoid: true,
    createdAt: 'answer_createdAt',
    updatedAt: 'answer_updatedAt',
    deletedAt: 'answer_deletedAt',
  });
  return Answer;
};