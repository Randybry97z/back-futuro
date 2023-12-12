"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEntity = exports.patchEntity = exports.getEntity = exports.getEntities = exports.deleteEntity = exports.createEntity = void 0;
var _models = _interopRequireDefault(require("../database/models"));
const getEntities = async (req, res) => {
  try {
    const data = await _models.default.Entity.findAll({
      attributes: {
        exclude: ["participante_id"]
      }
    });
    res.status(200).json({
      data,
      mensaje: "Operación realizada con exito",
      success: true
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al consultar los datos",
      success: false
    });
  }
};
exports.getEntities = getEntities;
const createEntity = async (req, res) => {
  try {
    const {
      participante_id,
      entity_name,
      entity_city,
      entity_address,
      entity_representative_name,
      entity_representative_mail,
      entity_representative_phone
    } = req.body;
    const entity = await _models.default.Entity.create({
      participante_id,
      entity_name,
      entity_city,
      entity_address,
      entity_representative_name,
      entity_representative_mail,
      entity_representative_phone
    });
    if (entity) {
      res.status(201).json({
        data: entity,
        mensaje: "Entidad creada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "Ocurrio un error al crear la entidad",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al crear la entidad",
      error: error,
      success: false
    });
  }
};
exports.createEntity = createEntity;
const getEntity = async (req, res) => {
  try {
    const entity = await _models.default.Entity.findByPk(req.params.id, {
      attributes: {
        exclude: ["participante_id"]
      }
    });
    if (entity) {
      res.status(200).json({
        data: entity,
        mensaje: "Operación realizada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "entidad no encontrada",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      error,
      mensaje: "Ocurrio un error al consultar los datos",
      success: false
    });
  }
};
exports.getEntity = getEntity;
const updateEntity = async (req, res) => {
  try {
    const entity = await _models.default.Entity.update(req.body, {
      where: {
        entity_id: req.params.id
      }
    });
    if (entity[0]) {
      res.status(200).json({
        mensaje: "Entidad actualizada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe la entidad",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al actualizar los datos",
      error,
      success: false
    });
  }
};
exports.updateEntity = updateEntity;
const patchEntity = async (req, res) => {
  try {
    const entity = await _models.default.Entity.update(req.body, {
      where: {
        entity_id: req.params.id
      }
    });
    if (entity[0]) {
      res.status(200).json({
        mensaje: "Entidad actualizada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe la entidad",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al actualizar los datos",
      error,
      success: false
    });
  }
};
exports.patchEntity = patchEntity;
const deleteEntity = async (req, res) => {
  try {
    const entity = await _models.default.Entity.destroy({
      where: {
        entity_id: req.params.id
      }
    });
    if (entity) {
      res.status(200).json({
        mensaje: "entidad eliminada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe la entidad",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al eliminar los datos",
      error,
      success: false
    });
  }
};
exports.deleteEntity = deleteEntity;
//# sourceMappingURL=entity.controller.js.map