'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstitutionalizationHistory extends Model {
    static associate(models) {
      InstitutionalizationHistory.belongsTo(models.Participante, {
        foreignKey: 'participante_id',
        allowNull: false
      });
    }
  }
  InstitutionalizationHistory.init({
    history_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    history_acommodation_time: {
      type: DataTypes.STRING,
      max: 50,
      allowNull: false
    },
    history_previous_acommodation: {
      type: DataTypes.STRING,
      max: 100,
      allowNull: false
    },
    history_previous_ethos: {
      type: DataTypes.STRING,
      max: 100,
      allowNull: false
    },
    history_quantity_programs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    history_nohome_state: {
      type: DataTypes.STRING,
      max: 50,
      allowNull: false
    },
    history_assault_state: {
      type: DataTypes.STRING,
      max: 50,
      allowNull: false
    },
    history_social_profile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    history_problematic: {
      type: DataTypes.STRING,
      max: 50,
      allowNull: false
    },
    history_entity: {
      type: DataTypes.STRING,
      max: 100,
      allowNull: false
    },
    history_register_date: {
      type: DataTypes.STRING,
      max: 100,
      allowNull: false
    },
    history_updown_date: {
      type: DataTypes.STRING,
      max: 100,
      allowNull: false
    },
    history_updown_reason: {
      type: DataTypes.STRING,
      max: 100,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'InstitutionalizationHistory',
    tableName: 'institutionalization_history',
    timestamps: true,
    paranoid: true,
    createdAt: 'history_createdAt',
    updatedAt: 'history_updatedAt',
    deletedAt: 'history_deletedAt',
  });
  return InstitutionalizationHistory;
};