"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAnswer = exports.getAnswersByPid = exports.getAnswersByParticipant = exports.getAnswers = exports.getAnswer = exports.deleteAnswer = exports.createAnswersByDate = exports.createAnswers = exports.createAnswer = void 0;
var _models = _interopRequireWildcard(require("../database/models"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const getAnswers = async (req, res) => {
  try {
    const data = await _models.default.Answer.findAll({
      include: [{
        model: _models.default.Question
      }, {
        model: _models.default.Participante
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
exports.getAnswers = getAnswers;
const getAnswersByPid = async (req, res) => {
  try {
    const data = await _models.default.Answer.findAll({
      where: {
        participante_id: req.params.id
      }
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
exports.getAnswersByPid = getAnswersByPid;
const getAnswersByParticipant = async (req, res) => {
  try {
    const data = await _models.default.Answer.findAll({
      include: [{
        model: _models.default.Question,
        attributes: ['form_id']
      }],
      // attributes: [[sequelize.fn('date', sequelize.col('answer_createdAt')), 'answer_createdAt']],
      where: {
        participante_id: req.params.id
      }
      // group: [[sequelize.fn('date', sequelize.col('answer_createdAt')), 'answer_createdAt']]
    });

    res.status(200).json({
      data,
      mensaje: 'Operación realizada con exito',
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error,
      mensaje: 'Ocurrio un error al consultar los datos',
      success: false
    });
  }
};
exports.getAnswersByParticipant = getAnswersByParticipant;
const createAnswer = async (req, res) => {
  try {
    const {
      participante_id,
      question_id,
      answer_value
    } = req.body;
    const answer = await _models.default.Answer.create({
      participante_id,
      question_id,
      answer_value
    });
    if (answer) {
      res.status(201).json({
        data: answer,
        mensaje: 'Respuesta agregada con exito',
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
      mensaje: 'Ocurrio un error al crear la respuesta',
      success: false,
      error
    });
  }
};
exports.createAnswer = createAnswer;
const getAnswer = async (req, res) => {
  try {
    const answer = await _models.default.Answer.findByPk(req.params.id);
    if (answer) {
      res.status(200).json({
        data: answer,
        mensaje: 'Operación realizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Respuesta no encontrada',
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
exports.getAnswer = getAnswer;
const updateAnswer = async (req, res) => {
  try {
    const answer = await _models.default.Answer.update(req.body, {
      where: {
        answer_id: req.params.id
      }
    });
    if (answer[0]) {
      res.status(200).json({
        mensaje: 'Respuesta actualizada con exito',
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
exports.updateAnswer = updateAnswer;
const deleteAnswer = async (req, res) => {
  try {
    const answer = await _models.default.Answer.destroy({
      where: {
        answer_id: req.params.id
      }
    });
    if (answer) {
      res.status(200).json({
        mensaje: 'Respuesta eliminada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe la respuesta',
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
exports.deleteAnswer = deleteAnswer;
const createAnswers = async (req, res) => {
  try {
    let updates = 0;
    const result = await Promise.all(req.body.map(async (participante_id, question_id, answer_value, answer_date) => {
      const [answer, created] = await _models.default.Answer.findOrCreate({
        where: {
          participante_id,
          question_id
        },
        defaults: {
          participante_id,
          question_id,
          answer_value,
          answer_date
        }
      });
      if (!created) {
        if (answer.answer_value !== answer_value || answer.answer_date !== answer_date) {
          const updated = await _models.default.Answer.update({
            answer_value,
            answer_date
          }, {
            where: {
              answer_id: answer.answer_id
            }
          });
          if (updated[0]) updates++;
        }
      }
      return created;
    }));
    if (result) {
      let added = result.filter(opt => opt).length;
      res.status(201).json({
        mensaje: "Se guard".concat(added === 1 ? 'o' : 'aron', ": ").concat(added, " respuesta").concat(added !== 1 ? 's' : '', ", se actualiz").concat(updates === 1 ? 'o' : 'aron', ": ").concat(updates, " respuesta").concat(updates !== 1 ? 's' : '', "."),
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Ocurrio un error al guardar las respuestas',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al crear las respuestas',
      success: false,
      error
    });
  }
};
exports.createAnswers = createAnswers;
const createAnswersByDate = async (req, res) => {
  try {
    let updates = 0;
    const result = await Promise.all(req.body.map(async _ref => {
      let {
        participante_id,
        question_id,
        answer_value,
        answer_createdAt
      } = _ref;
      const [answer, created] = await _models.default.Answer.findOrCreate({
        where: {
          participante_id,
          question_id,
          answer_createdAt: _models.sequelize.fn('date', answer_createdAt)
        },
        defaults: {
          participante_id,
          question_id,
          answer_value
        }
      });
      if (!created) {
        if (answer.answer_value !== answer_value) {
          const updated = await _models.default.Answer.update({
            answer_value
          }, {
            where: {
              answer_id: answer.answer_id
            }
          });
          if (updated[0]) updates++;
        }
      }
      return created;
    }));
    if (result) {
      let added = result.filter(opt => opt).length;
      res.status(201).json({
        mensaje: "Se guard".concat(added === 1 ? 'o' : 'aron', ": ").concat(added, " respuesta").concat(added !== 1 ? 's' : '', ", se actualiz").concat(updates === 1 ? 'o' : 'aron', ": ").concat(updates, " respuesta").concat(updates !== 1 ? 's' : '', "."),
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Ocurrio un error al guardar las respuestas',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al crear las respuestas',
      success: false,
      error
    });
  }
};
exports.createAnswersByDate = createAnswersByDate;
//# sourceMappingURL=answer.controller.js.map