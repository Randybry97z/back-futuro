'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static async encryptPassword(password) {
      const salt = await bcrypt.genSalt(10);
      return bcrypt.hash(password, salt);
    }
    static async comparePassword(password, encryptPassword) {
      return await bcrypt.compare(password, encryptPassword);
    }
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: 'role_id',
        allowNull: false
      });
      User.belongsTo(models.Company, {
        foreignKey: 'company_id',
        allowNull: false
      });
      User.hasMany(models.Form, {
        foreignKey: 'user_id'
      });
      User.hasMany(models.Participante, {
        foreignKey: 'user_id'
      });
    }
  }
  User.init({
    user_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      max: 150
    },
    user_lastName: {
      type: DataTypes.STRING,
      max: 150
    },
    user_maternalLastName: {
      type: DataTypes.STRING,
      max: 150
    },
    user_mail: {
      type: DataTypes.STRING,
      max: 150
    },
    user_password: DataTypes.TEXT,
    user_avatar: DataTypes.TEXT,
    user_birthday: DataTypes.DATE,
    user_verified: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: true,
    paranoid: true,
    createdAt: 'user_createdAt',
    updatedAt: 'user_updatedAt',
    deletedAt: 'user_deletedAt',
  });
  return User;
};