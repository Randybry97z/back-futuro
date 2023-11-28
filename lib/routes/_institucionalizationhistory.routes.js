"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.PREFIX = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var controller = _interopRequireWildcard(require("../controllers/institucionalizationhistory.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const historyRoutes = (0, _express.Router)();
historyRoutes.get('/', [_middlewares.verifyToken], controller.getInstitutionalizationHistories);
historyRoutes.post('/', [_middlewares.verifyToken], controller.createInstitutionalizationHistory);
historyRoutes.get('/:id', [_middlewares.verifyToken], controller.getInstitutionalizationHistory);
historyRoutes.put('/:id', [_middlewares.verifyToken], controller.updateInstitutionalizationHistory);
historyRoutes.delete('/:id', [_middlewares.verifyToken], controller.deleteInstitutionalizationHistory);
const PREFIX = exports.PREFIX = '/institucionalization_history';
const ROUTER = exports.ROUTER = historyRoutes;
//# sourceMappingURL=_institucionalizationhistory.routes.js.map