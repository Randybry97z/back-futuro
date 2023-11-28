'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User, {
        foreignKey: 'role_id'
      });
    }
  }
  ;
  Role.init({
    role_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING,
      max: 100
    },
    role_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'role',
    timestamps: true,
    paranoid: true,
    createdAt: 'role_createdAt',
    updatedAt: 'role_updatedAt',
    deletedAt: 'role_deletedAt'
  });
  return Role;
};
//# sourceMappingURL=role.js.map