"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.PREFIX = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var controller = _interopRequireWildcard(require("../controllers/role.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const roleRoutes = (0, _express.Router)();
roleRoutes.get('/', [_middlewares.verifyToken], controller.getRoles);
roleRoutes.post('/', [_middlewares.verifyToken], controller.createRole);
roleRoutes.get('/:id', [_middlewares.verifyToken], controller.getRole);
roleRoutes.put('/:id', [_middlewares.verifyToken], controller.updateRole);
roleRoutes.delete('/:id', [_middlewares.verifyToken], controller.deleteRole);
const PREFIX = exports.PREFIX = '/role';
const ROUTER = exports.ROUTER = roleRoutes;
//# sourceMappingURL=_role.routes.js.map