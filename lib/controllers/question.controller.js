"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuestion = exports.getQuestions = exports.getQuestion = exports.deleteQuestion = exports.createQuestion = void 0;
var _models = _interopRequireDefault(require("../database/models"));
const getQuestions = async (req, res) => {
  try {
    const data = await _models.default.Question.findAll({
      include: [{
        model: _models.default.Form
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
exports.getQuestions = getQuestions;
const createQuestion = async (req, res) => {
  try {
    const {
      form_id,
      question_text,
      question_type,
      question_options,
      question_group,
      question_width
    } = req.body;
    const question = await _models.default.Question.create({
      form_id,
      question_text,
      question_type,
      question_options,
      question_group,
      question_width
    });
    if (question) {
      res.status(201).json({
        data: question,
        mensaje: 'Pregunta agregada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Ocurrio un error al crear la pregunta',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al crear la pregunta',
      success: false,
      error
    });
  }
};
exports.createQuestion = createQuestion;
const getQuestion = async (req, res) => {
  try {
    const question = await _models.default.Question.findByPk(req.params.id);
    if (question) {
      res.status(200).json({
        data: question,
        mensaje: 'Operación realizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Pregunta no encontrada',
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
exports.getQuestion = getQuestion;
const updateQuestion = async (req, res) => {
  try {
    const question = await _models.default.Question.update(req.body, {
      where: {
        question_id: req.params.id
      }
    });
    if (question[0]) {
      res.status(200).json({
        mensaje: 'Pregunta actualizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe la pregunta',
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
exports.updateQuestion = updateQuestion;
const deleteQuestion = async (req, res) => {
  try {
    const question = await _models.default.Question.destroy({
      where: {
        question_id: req.params.id
      }
    });
    if (question) {
      res.status(200).json({
        mensaje: 'Pregunta eliminada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe la pregunta',
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
exports.deleteQuestion = deleteQuestion;