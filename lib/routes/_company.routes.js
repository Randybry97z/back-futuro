"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.PREFIX = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var controller = _interopRequireWildcard(require("../controllers/company.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const companyRoutes = (0, _express.Router)();
companyRoutes.get('/', controller.getCompanies);
companyRoutes.post('/', [_middlewares.verifyToken], controller.createCompany);
companyRoutes.get('/:id', [_middlewares.verifyToken], controller.getCompany);
companyRoutes.put('/:id', [_middlewares.verifyToken], controller.updateCompany);
companyRoutes.delete('/:id', [_middlewares.verifyToken], controller.deleteCompany);
const PREFIX = exports.PREFIX = '/company';
const ROUTER = exports.ROUTER = companyRoutes;
//# sourceMappingURL=_company.routes.js.map