'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    static associate(models) {
      Form.belongsTo(models.User, {
        foreignKey: 'user_id',
        allowNull: false
      });
      Form.hasMany(models.Question, {
        foreignKey: 'form_id',
        allowNull: false
      });
    }
  }
  Form.init({
    form_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    form_name: {
      type: DataTypes.STRING,
      max: 200,
      allowNull: false
    },
    form_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    form_departamento: {
      type: DataTypes.STRING,
      max: 150,
      allowNull: false
    },
    form_type: {
      type: DataTypes.STRING,
      max: 150,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Form',
    tableName: 'form',
    timestamps: true,
    paranoid: true,
    createdAt: 'form_createdAt',
    updatedAt: 'form_updatedAt',
    deletedAt: 'form_deletedAt'
  });
  return Form;
};