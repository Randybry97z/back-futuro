'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entity extends Model {
    static associate(models) {
      Entity.belongsTo(models.Participante, {
        foreignKey: 'participante_id',
        allowNull: false
      });
    }
  }
  Entity.init({
    entity_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    entity_name: {
      type: DataTypes.STRING,
      max: 200
    },
    entity_city: {
      type: DataTypes.STRING,
      max: 50
    },
    entity_address: DataTypes.TEXT,
    entity_representative_name: {
      type: DataTypes.STRING,
      max: 150
    },
    entity_representative_mail: {
      type: DataTypes.STRING,
      max: 150
    },
    entity_representative_phone: {
      type: DataTypes.STRING,
      max: 150
    },
  }, {
    sequelize,
    modelName: 'Entity',
    tableName: 'entity',
    timestamps: true,
    paranoid: true,
    createdAt: 'entity_createdAt',
    updatedAt: 'entity_updatedAt',
    deletedAt: 'entity_deletedAt',
  });
  return Entity;
};