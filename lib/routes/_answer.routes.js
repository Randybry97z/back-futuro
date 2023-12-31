"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.PREFIX = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var controller = _interopRequireWildcard(require("../controllers/answer.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const answerRoutes = (0, _express.Router)();
answerRoutes.get('/', controller.getAnswers);
answerRoutes.get('/participant/:id', controller.getAnswersByParticipant);
answerRoutes.post('/', controller.createAnswer);
answerRoutes.get('/:id', [_middlewares.verifyToken], controller.getAnswer);
answerRoutes.put('/:id', [_middlewares.verifyToken], controller.updateAnswer);
answerRoutes.delete('/:id', [_middlewares.verifyToken], controller.deleteAnswer);
answerRoutes.post('/save-answers', controller.createAnswers);
answerRoutes.get('/p/:id', controller.getAnswersByPid);
answerRoutes.post('/save-answers-by-date', controller.createAnswersByDate);
const PREFIX = exports.PREFIX = '/answer';
const ROUTER = exports.ROUTER = answerRoutes;
//# sourceMappingURL=_answer.routes.js.map