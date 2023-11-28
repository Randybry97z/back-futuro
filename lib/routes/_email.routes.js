"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTER = exports.PREFIX = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var controller = _interopRequireWildcard(require("../controllers/_email.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const emailRoutes = (0, _express.Router)();
emailRoutes.post("/", controller.createMail);
emailRoutes.post("/approvedUser", [_middlewares.verifyToken], controller.approveUserEmail);
emailRoutes.get("/verifyEmail/:userId/:uniqueString", controller.verifyEmail);
emailRoutes.get("/verifyEmailToDelete/:userId/:uniqueString", controller.verifyToDeletedEmail);
emailRoutes.get("/verifyEmail", controller.verifyEmailPage);
emailRoutes.get("/verifyDeleteEmail", controller.verifyEmailDeletePage);
emailRoutes.get("/forgotPswEmail/:userId/:passwordGenerated", controller.updateToForgotPsw);
const PREFIX = exports.PREFIX = "/email";
const ROUTER = exports.ROUTER = emailRoutes;
//# sourceMappingURL=_email.routes.js.map