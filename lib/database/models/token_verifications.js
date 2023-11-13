'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _sequelize = _interopRequireDefault(require("sequelize"));
const op = _sequelize.default.Op;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Token.belongsTo(models.User, {
        foreignKey: 'user_id',
        allowNull: false
      });
    }
  }
  Token.init({
    token_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    token_uniqueString: {
      type: DataTypes.STRING,
      max: 150
    },
    token_expiredAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Token',
    tableName: 'token_verifications',
    timestamps: true,
    paranoid: true,
    createdAt: 'token_createdAt',
    updatedAt: 'token_updatedAt',
    deletedAt: 'token_deletedAt'
  }, {
    defaultScope: {
      where: {
        token_expiredAt: {
          [op.ne]: null
        }
      }
    },
    scopes: {
      deleted: {
        where: {
          deleted: true
        }
      },
      emptyToken: {
        include: [{
          model: Token,
          where: {
            token_uniqueString: ""
          }
        }]
      }
    }
  });
  return Token;
};