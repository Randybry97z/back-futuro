"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLineDashboard = void 0;
var _models = _interopRequireWildcard(require("../database/models"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const generateLineDashboard = async (req, res) => {
  try {
    let {
      participanteId,
      questionIds
    } = req.body;
    console.log("--------", participanteId, questionIds);
    const data = await _models.default.Answer.findAll({
      include: [{
        model: _models.default.Question,
        attributes: ['form_id', 'question_text']
      }],
      attributes: ['answer_value', 'answer_createdAt'],
      where: {
        participante_id: participanteId,
        question_id: questionIds
      }
    });
    let dataDashboard = [];
    for (let i = 0; i < data.length; i++) {
      dataDashboard.push(0);
    }
    for (let i = 0; i < data.length; i++) {
      dataDashboard[parseInt(data[i].answer_value) - 1]++;
    }
    console.log(dataDashboard);
    res.status(200).json({
      data,
      dashboard: dataDashboard,
      mensaje: 'Operación realizada con exito',
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Ocurrio un error al consultar los datos',
      success: false
    });
  }
};
exports.generateLineDashboard = generateLineDashboard;
//# sourceMappingURL=dashboard.controller.js.map