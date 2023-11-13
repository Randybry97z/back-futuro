"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _helpers = require("./helpers");
var __rutas = _interopRequireWildcard(require("./routes"));
var __rutasAuth = _interopRequireWildcard(require("./routes/_auth.routes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
app.use((0, _cors.default)({
  origin: '*'
}));
app.use(_express.default.json());
app.use((0, _helmet.default)());
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config();
}
if ((0, _helpers.isDev)()) {
  Promise.all(['jsonwebtoken', './database/models'].map(dynamicImport => (specifier => new Promise(r => r("".concat(specifier))).then(s => _interopRequireWildcard(require(s))))(dynamicImport))).then(_ref => {
    let [jwt, db] = _ref;
    app.get('/get-token', async (req, res) => {
      if (!req.query.user) return res.status(400).json({
        mensaje: 'El usuario es obligatorio'
      });
      const usuario = await db.User.findOne({
        where: {
          user_mail: req.query.user
        }
      });
      if (usuario) {
        const token = jwt.sign({
          user_id: usuario.id
        }, process.env.API_KEY, {
          expiresIn: '1d'
        });
        res.status(200).json({
          token
        });
      } else {
        res.status(403).json({
          mensaje: 'No tienes permisos'
        });
      }
    });
  });
}
app.get('/', (_req, res) => {
  res.json({
    name: 'FuturoCO',
    Autor: 'AtodoSoftware'
  });
});
app.use(process.env.API_URL + __rutasAuth.PREFIX, __rutasAuth.ROUTER);
Object.entries(__rutas.default).forEach(entry => {
  const [_key, value] = entry;
  const API_URL = process.env.API_ENDPOINT + value.PREFIX;
  app.use(API_URL, value.ROUTER);
});
const port = process.env.DB_PORT || 3002;
const server = app.listen(port, error => {
  if (error) return console.log("Error: ".concat(error));
  console.log("Server jalando en el puerto: ".concat(server.address().port));
});