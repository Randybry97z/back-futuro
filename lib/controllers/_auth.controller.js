"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.checkToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _models = _interopRequireDefault(require("../database/models"));
const login = async (req, res) => {
  const {
    correo,
    password
  } = req.body;
  if (!correo || !password) return res.status(401).json({
    mensaje: 'Datos incorrectos',
    success: false
  });
  const existe = await _models.default.User.findOne({
    where: {
      user_mail: correo
    },
    include: [{
      model: _models.default.Role,
      attributes: ['role_name']
    }]
  });
  if (!existe) return res.status(401).json({
    mensaje: 'Datos incorrectos',
    success: false
  });
  const matchPassword = await _models.default.User.comparePassword(password, existe.user_password);
  // console.log(matchPassword, password, existe.user_password)
  // if (!matchPassword) return res.status(401).json({ mensaje: 'Las contraseñas no coinciden', success: false });
  const token = _jsonwebtoken.default.sign({
    id: existe.user_id
  }, process.env.API_KEY, {
    expiresIn: '1d'
  });
  res.status(200).json({
    token,
    rol: existe.Role.role_name,
    usuario: {
      id: existe.user_id,
      correo: existe.user_mail,
      nombre: "".concat(existe.user_name || '', " ").concat(existe.user_lastName || '', " ").concat(existe.user_maternalLastName || ''),
      avatar: existe.user_avatar
    },
    success: true
  });
};
exports.login = login;
const checkToken = async (req, res) => {
  const token = req.headers['x-access-token'];
  if (token) {
    const decoded = _jsonwebtoken.default.verify(token, process.env.API_KEY);
    const user = await _models.default.User.findByPk(decoded.id);
    if (user) {
      res.status(200).json({
        usuario: {
          correo: user.user_mail,
          nombre: "".concat(user.user_name || '', " ").concat(user.user_lastName || '', " ").concat(user.user_maternalLastName || ''),
          avatar: user.user_avatar
        },
        success: true
      });
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
};
exports.checkToken = checkToken;
//# sourceMappingURL=_auth.controller.js.map