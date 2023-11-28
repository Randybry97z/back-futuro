'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participante extends Model {
    static associate(models) {
      Participante.belongsTo(models.User, {
        foreignKey: 'user_id',
        allowNull: false
      });
      Participante.hasMany(models.Entity, {
        foreignKey: 'participante_id',
        allowNull: false
      });
      Participante.hasMany(models.Answer, {
        foreignKey: 'participante_id',
        allowNull: false
      });
      Participante.hasMany(models.InstitutionalizationHistory, {
        foreignKey: 'participante_id',
        allowNull: false
      });
    }
  }
  Participante.init({
    participante_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    participante_name: {
      type: DataTypes.STRING,
      max: 150,
      allowNull: false
    },
    participante_lastname: {
      type: DataTypes.STRING,
      max: 150,
      allowNull: false
    },
    participante_second_surname: {
      type: DataTypes.STRING,
      max: 150
    },
    participante_birthday: DataTypes.DATE,
    participante_age: DataTypes.INTEGER,
    participante_mail: {
      type: DataTypes.STRING,
      max: 150,
      allowNull: false
    },
    participante_phone: {
      type: DataTypes.STRING,
      max: 50
    },
    participante_code: {
      type: DataTypes.STRING,
      max: 50
    },
    participante_gender: {
      type: DataTypes.STRING,
      max: 50
    },
    participante_nationality: {
      type: DataTypes.STRING,
      max: 50
    },
    participante_language: {
      type: DataTypes.STRING,
      max: 50
    },
    participante_scholarship: {
      type: DataTypes.STRING,
      max: 50
    }
  }, {
    sequelize,
    modelName: 'Participante',
    tableName: 'participante',
    timestamps: true,
    paranoid: true,
    createdAt: 'participante_createdAt',
    updatedAt: 'participante_updatedAt',
    deletedAt: 'participante_deletedAt'
  });
  return Participante;
};
//# sourceMappingURL=participante.js.map