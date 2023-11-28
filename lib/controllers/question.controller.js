"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuestion = exports.getQuestionsByFormByParticipant = exports.getQuestions = exports.getQuestion = exports.deleteQuestion = exports.createQuestion = void 0;
var _core = require("@sequelize/core");
var _models = _interopRequireWildcard(require("../database/models"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const getQuestions = async (req, res) => {
  try {
    const data = await _models.default.Question.findAll({
      include: [{
        model: _models.default.Form
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
exports.getQuestions = getQuestions;
function isSameDayDateTime(attribute, date) {
  console.log(attribute, date);
  return {
    [attribute]: {
      [_core.Op.and]: {
        [_core.Op.gte]: date + ' 00:00:00',
        [_core.Op.lte]: date + ' 23:59:59.999999'
      }
    }
  };
}
const getQuestionsByFormByParticipant = async (req, res) => {
  try {
    const data = await _models.default.Question.findAll({
      include: [{
        model: _models.default.Form
      }, {
        model: _models.default.Answer,
        where: {
          [_core.Op.and]: [{
            participante_id: req.params.participant_id
          }, {
            answer_createdAt: _models.sequelize.fn('date', req.params.date)
          }
          // isSameDayDateTime('answer_createdAt', req.params.date),
          ]
        }
      }],

      where: {
        form_id: req.params.form_id
      }
    });
    res.status(200).json({
      data,
      mensaje: "Operación realizada con exito",
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error,
      mensaje: "Ocurrio un error al consultar los datos",
      success: false
    });
  }
};
exports.getQuestionsByFormByParticipant = getQuestionsByFormByParticipant;
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
        mensaje: "Pregunta agregada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "Ocurrio un error al crear la pregunta",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al crear la pregunta",
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
        mensaje: "Operación realizada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "Pregunta no encontrada",
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
        mensaje: "Pregunta actualizada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe la pregunta",
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
        mensaje: "Pregunta eliminada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe la pregunta",
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
exports.deleteQuestion = deleteQuestion;
//# sourceMappingURL=question.controller.js.map