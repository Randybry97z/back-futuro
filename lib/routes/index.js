"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fs = require("fs");
var _path = _interopRequireDefault(require("path"));
const basename = _path.default.basename(__filename);
const masterRouter = {};
(0, _fs.readdirSync)(__dirname).filter(file => {
  return file.indexOf('.') !== 0 && file !== basename && file !== '_auth.routes.js' && file.slice(-3) === '.js';
}).map(file => {
  let prefix = file.replace('_', '').replace('.routes.js', 'Routes');
  const router = require(_path.default.join(__dirname, file));
  masterRouter[prefix] = router;
  return router;
});
var _default = exports.default = masterRouter;
//# sourceMappingURL=index.js.map