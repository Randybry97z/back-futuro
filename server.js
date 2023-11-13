import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { isDev } from './helpers';
import * as __rutas from './routes';
import * as __rutasAuth from './routes/_auth.routes';

const app = express();
app.use(morgan('dev'));
app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(helmet());

if( process.env.NODE_ENV === 'production' ){
  require('dotenv').config();
}

if (isDev()) {
  Promise.all(['jsonwebtoken', './database/models'].map(dynamicImport => (import(dynamicImport)))).then(([jwt, db]) => {
    app.get('/get-token', async (req, res) => {
      if (!req.query.user) return res.status(400).json({ mensaje: 'El usuario es obligatorio' });
      const usuario = await db.User.findOne({ where: { user_mail: req.query.user } });
      if (usuario) {
        const token = jwt.sign({ user_id: usuario.id }, process.env.API_KEY, { expiresIn: '1d' });
        res.status(200).json({ token });
      } else {
        res.status(403).json({ mensaje: 'No tienes permisos' });
      }
    })
  })
}

app.get('/', (_req, res) => {
  res.json({
    name: 'FuturoCO',
    Autor: 'AtodoSoftware'
  });
})

app.use(process.env.API_URL + __rutasAuth.PREFIX, __rutasAuth.ROUTER);

Object.entries(__rutas.default).forEach(entry => {
  const [_key, value] = entry;
  const API_URL = process.env.API_ENDPOINT + value.PREFIX;
  app.use(API_URL, value.ROUTER);
});
const port = process.env.DB_PORT || 3002;
const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server jalando en el puerto: ${server.address().port}`);
})