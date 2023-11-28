"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.PREFIX = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var controller = _interopRequireWildcard(require("../controllers/question.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const questionRoutes = (0, _express.Router)();
questionRoutes.get('/', [_middlewares.hasPermissions], controller.getQuestions);
questionRoutes.get('/form_participant/:form_id/:participant_id/:date', [_middlewares.verifyToken], controller.getQuestionsByFormByParticipant);
questionRoutes.post('/', [_middlewares.hasPermissions], controller.createQuestion);
questionRoutes.get('/:id', [_middlewares.hasPermissions], controller.getQuestion);
questionRoutes.put('/:id', [_middlewares.hasPermissions], controller.updateQuestion);
questionRoutes.delete('/:id', [_middlewares.hasPermissions], controller.deleteQuestion);
const PREFIX = exports.PREFIX = '/question';
const ROUTER = exports.ROUTER = questionRoutes;
//# sourceMappingURL=_question.routes.js.map