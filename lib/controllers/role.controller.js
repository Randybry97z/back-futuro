"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRole = exports.getRoles = exports.getRole = exports.deleteRole = exports.createRole = void 0;
var _models = _interopRequireDefault(require("../database/models"));
const getRoles = async (req, res) => {
  try {
    const data = await _models.default.Role.findAll({
      attributes: ['role_name', 'role_description']
    });
    res.status(200).json({
      data,
      mensaje: 'Operación realizada con exito',
      success: true
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al consultar los datos',
      success: false
    });
  }
};
exports.getRoles = getRoles;
const createRole = async (req, res) => {
  try {
    const {
      role_name,
      role_description
    } = req.body;
    const rol = await _models.default.Role.create({
      role_name,
      role_description
    });
    if (rol) {
      res.status(201).json({
        data: rol,
        mensaje: 'Rol agregado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Ocurrio un error al crear el rol',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al crear el rol',
      success: false
    });
  }
};
exports.createRole = createRole;
const getRole = async (req, res) => {
  try {
    const rol = await _models.default.Role.findByPk(req.params.id, {
      attributes: ['role_name', 'role_description']
    });
    if (rol) {
      res.status(200).json({
        data: rol,
        mensaje: 'Operación realizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Rol no encontrado',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al consultar los datos',
      success: false
    });
  }
};
exports.getRole = getRole;
const updateRole = async (req, res) => {
  try {
    const rol = await _models.default.Role.update(req.body, {
      where: {
        role_id: req.params.id
      }
    });
    if (rol[0]) {
      res.status(200).json({
        mensaje: 'Rol actualizado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe el rol',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al actualizar los datos',
      success: false
    });
  }
};
exports.updateRole = updateRole;
const deleteRole = async (req, res) => {
  try {
    const rol = await _models.default.Role.destroy({
      where: {
        role_id: req.params.id
      }
    });
    if (rol) {
      res.status(200).json({
        mensaje: 'Rol eliminado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe el rol',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al eliminar los datos',
      success: false
    });
  }
};
exports.deleteRole = deleteRole;
//# sourceMappingURL=role.controller.js.map