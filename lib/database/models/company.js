'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.User, {
        foreignKey: 'company_id'
      });
    }
  }
  Company.init({
    company_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    company_name: {
      type: DataTypes.STRING,
      max: 150
    },
    company_description: DataTypes.TEXT,
    company_address: DataTypes.TEXT,
    company_code: {
      type: DataTypes.STRING,
      max: 50
    }
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'company',
    timestamps: true,
    paranoid: true,
    createdAt: 'company_createdAt',
    updatedAt: 'company_updatedAt',
    deletedAt: 'company_deletedAt'
  });
  return Company;
};