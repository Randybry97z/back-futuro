"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.PREFIX = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var controller = _interopRequireWildcard(require("../controllers/participante.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const participantRoutes = (0, _express.Router)();
participantRoutes.get('/', [_middlewares.verifyToken], controller.getParticipantes);
participantRoutes.get('/byUser/:user_id', [_middlewares.verifyToken], controller.getParticipantesByUser);
participantRoutes.post('/', [_middlewares.verifyToken], controller.createParticipante);
participantRoutes.get('/:id', [_middlewares.verifyToken], controller.getParticipante);
participantRoutes.put('/:id', [_middlewares.verifyToken], controller.updateParticipante);
participantRoutes.delete('/:id', [_middlewares.verifyToken], controller.deleteParticipante);
const PREFIX = exports.PREFIX = '/participants';
const ROUTER = exports.ROUTER = participantRoutes;
//# sourceMappingURL=_participant.routes.js.map