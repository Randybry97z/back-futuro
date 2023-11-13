"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTecnino = exports.isAdmin = void 0;
var _user = require("../controllers/user.controller");
const isAdmin = async id => {
  const {
    usuario
  } = await (0, _user.getUsuario)(id);
  return usuario.role_name == 'admin';
};
exports.isAdmin = isAdmin;
const isTecnino = async id => {
  const {
    usuario
  } = await (0, _user.getUsuario)(id);
  return usuario.role_name == 'tecnico';
};
exports.isTecnino = isTecnino;