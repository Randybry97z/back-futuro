"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateForm = exports.getForms = exports.getForm = exports.deleteForm = exports.createForm = void 0;
var _models = _interopRequireDefault(require("../database/models"));
const getForms = async (req, res) => {
  try {
    const data = await _models.default.Form.findAll({
      include: [{
        model: _models.default.Question
      }]
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
exports.getForms = getForms;
const createForm = async (req, res) => {
  try {
    const {
      user_id,
      form_name,
      form_description,
      form_departamento,
      form_type
    } = req.body;
    const form = await _models.default.Form.create({
      user_id,
      form_name,
      form_description,
      form_departamento,
      form_type
    });
    if (form) {
      res.status(201).json({
        data: form,
        mensaje: 'Formulario agregado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Ocurrio un error al crear el formulario',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al crear el formulario',
      success: false,
      error
    });
  }
};
exports.createForm = createForm;
const getForm = async (req, res) => {
  try {
    const form = await _models.default.Form.findByPk(req.params.id, {
      include: [{
        model: _models.default.Question
      }]
    });
    if (form) {
      res.status(200).json({
        data: form,
        mensaje: 'Operación realizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Formulario no encontrado',
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
exports.getForm = getForm;
const updateForm = async (req, res) => {
  try {
    const form = await _models.default.Form.update(req.body, {
      where: {
        form_id: req.params.id
      }
    });
    if (form[0]) {
      res.status(200).json({
        mensaje: 'Formulario actualizado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe el formulario',
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
exports.updateForm = updateForm;
const deleteForm = async (req, res) => {
  try {
    const form = await _models.default.Form.destroy({
      where: {
        form_id: req.params.id
      }
    });
    if (form) {
      res.status(200).json({
        mensaje: 'Formulario eliminado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe el formulario',
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
exports.deleteForm = deleteForm;