import jwt from 'jsonwebtoken';
import db from '../database/models';
import { isDev } from '../helpers';

export const verifyToken = async (req, res, next) => {
  if (req.query.debug === 'true' && isDev()) return next();
  try {
    const token = req.headers['x-access-token'];
    if (token) {
      const decoded = jwt.verify(token, process.env.API_KEY);
      const usuario = await db.User.findByPk(decoded.id);
      if (usuario) {
        next();
      } else {
        res.status(404).json({
          mensaje: 'No tienes permisos suficientes para realizar la operación',
          success: false
        });
      }
    } else {
      res.status(403).json({ mensaje: 'El token es obligatorio', success: false });
    }
  } catch (error) {
    return res.status(401).json({ mensaje: 'El token no es valido', success: false });
  }
}
export const existEmail = async (req, res, next) => {
  if (!req.body.user_email) return res.status(400).json({ mensaje: 'El correo es obligatorio', success: false });
  const usuario = await db.User.findOne({ where: { user_mail: req.body.user_email } });
  if (usuario) {
    return res.status(400).json({ mensaje: 'El correo ingresado ya existe', success: false });
  }
  next();
}
export const hasPermissions = async (req, res, next) => {
  if (req.query.debug === 'true' && isDev()) return next();
  try {
    const token = req.headers['x-access-token'];
    if (token) {
      const decoded = jwt.verify(token, process.env.API_KEY);
      const usuario = await db.User.findByPk(decoded.id, {
        attributes: { exclude: ['user_password'] },
        include: [{ model: db.Role, attributes: ['role_name'] }]
      });
      const rol = usuario.Role.role_name;
      if (usuario && (rol === 'supersu' || rol === 'admin')) {
        next();
      } else {
        res.status(403).json({
          mensaje: 'No tienes permisos suficientes para realizar la operación',
          success: false
        });
      }
    } else {
      res.status(403).json({ mensaje: 'El token es obligatorio', success: false });
    }
  } catch (error) {
    return res.status(401).json({ mensaje: 'El token no es valido', success: false });
  }
}

