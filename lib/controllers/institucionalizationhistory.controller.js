"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateInstitutionalizationHistory = exports.getInstitutionalizationHistory = exports.getInstitutionalizationHistories = exports.deleteInstitutionalizationHistory = exports.createInstitutionalizationHistory = void 0;
var _models = _interopRequireDefault(require("../database/models"));
const getInstitutionalizationHistories = async (req, res) => {
  try {
    const data = await _models.default.InstitutionalizationHistory.findAll({
      attributes: {
        exclude: ["history_createdAt", "history_updatedAt"]
      },
      include: [{
        model: _models.default.Participante,
        attributes: ["participante_id"]
      }]
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
exports.getInstitutionalizationHistories = getInstitutionalizationHistories;
const createInstitutionalizationHistory = async (req, res) => {
  try {
    const {
      participante_id,
      history_acommodation_time,
      history_previous_acommodation,
      history_previous_ethos,
      history_quantity_programs,
      history_nohome_state,
      history_assault_state,
      history_social_profile,
      history_problematic,
      history_entity,
      history_register_date,
      history_updown_date,
      history_updown_reason
    } = req.body;
    const institutionalization_history = await _models.default.InstitutionalizationHistory.create({
      participante_id,
      history_acommodation_time,
      history_previous_acommodation,
      history_previous_ethos,
      history_quantity_programs,
      history_nohome_state,
      history_assault_state,
      history_social_profile,
      history_problematic,
      history_entity,
      history_register_date,
      history_updown_date,
      history_updown_reason
    });
    if (institutionalization_history) {
      res.status(201).json({
        data: institutionalization_history,
        mensaje: "InstitutionalizationHistory agregado con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "Ocurrio un error al crear la historia de institucionalización",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al crear la historia de institucionalización",
      success: false
    });
  }
};
exports.createInstitutionalizationHistory = createInstitutionalizationHistory;
const getInstitutionalizationHistory = async (req, res) => {
  try {
    const institutionalization_history = await _models.default.InstitutionalizationHistory.findByPk(req.params.id, {
      attributes: {
        exclude: ["history_createdAt", "history_updatedAt"]
      },
      include: [{
        model: _models.default.Participante,
        attributes: ["participante_id"]
      }]
    });
    if (institutionalization_history) {
      res.status(200).json({
        data: institutionalization_history,
        mensaje: "Operación realizada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "historia de institucionalización no encontrada",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al consultar los datos",
      success: false
    });
  }
};
exports.getInstitutionalizationHistory = getInstitutionalizationHistory;
const updateInstitutionalizationHistory = async (req, res) => {
  try {
    const institutionalization_history = await _models.default.InstitutionalizationHistory.update(req.body, {
      where: {
        history_id: req.params.id
      }
    });
    if (institutionalization_history[0]) {
      res.status(200).json({
        mensaje: "Usuario actualizado con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe la historia de institucionalización",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al actualizar los datos",
      success: false
    });
  }
};
exports.updateInstitutionalizationHistory = updateInstitutionalizationHistory;
const deleteInstitutionalizationHistory = async (req, res) => {
  try {
    const institutionalization_history = await _models.default.InstitutionalizationHistory.destroy({
      where: {
        history_id: req.params.id
      }
    });
    if (institutionalization_history) {
      res.status(200).json({
        mensaje: "historia de institucionalización eliminada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe la historia de institucionalización",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al eliminar los datos",
      success: false
    });
  }
};
exports.deleteInstitutionalizationHistory = deleteInstitutionalizationHistory;