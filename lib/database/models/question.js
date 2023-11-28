'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Form, {
        foreignKey: 'form_id',
        allowNull: false
      });
      Question.hasMany(models.Answer, {
        foreignKey: 'question_id',
        allowNull: false
      });
    }
  }
  Question.init({
    question_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    question_type: {
      type: DataTypes.STRING,
      max: 100,
      allowNull: false,
      defaultValue: 'text'
    },
    question_options: {
      type: DataTypes.TEXT
    },
    question_width: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    question_group: {
      type: DataTypes.STRING,
      allowNull: true
    },
    question_subtitle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    question_instruccions: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'question',
    timestamps: true,
    paranoid: true,
    createdAt: 'question_createdAt',
    updatedAt: 'question_updatedAt',
    deletedAt: 'question_deletedAt'
  });
  return Question;
};
//# sourceMappingURL=question.js.map