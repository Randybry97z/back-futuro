import jwt from 'jsonwebtoken';
import db from '../database/models';

export const login = async (req, res) => {
  const { correo, password } = req.body;
  if (!correo || !password) return res.status(401).json({ mensaje: 'Datos incorrectos', success: false });
  const existe = await db.User.findOne({
    where: { user_mail: correo },
    include: [{ model: db.Role, attributes: ['role_name'] }]
  });
  if (!existe) return res.status(401).json({ mensaje: 'Datos incorrectos', success: false });
  const matchPassword = await db.User.comparePassword(password, existe.user_password);
  // console.log(matchPassword, password, existe.user_password)
  // if (!matchPassword) return res.status(401).json({ mensaje: 'Las contraseñas no coinciden', success: false });
  const token = jwt.sign({ id: existe.user_id }, process.env.API_KEY, { expiresIn: '1d' });
  res.status(200).json({
    token,
    rol: existe.Role.role_name,
    usuario: {
      id: existe.user_id,
      correo: existe.user_mail,
      nombre: `${existe.user_name || ''} ${existe.user_lastName || ''} ${existe.user_maternalLastName || ''}`,
      avatar: existe.user_avatar
    },
    success: true
  });
}

export const checkToken = async (req, res) => {
  const token = req.headers['x-access-token'];
  if (token) {
    const decoded = jwt.verify(token, process.env.API_KEY);
    const user = await db.User.findByPk(decoded.id);
    if (user) {
      res.status(200).json({
        usuario: {
          correo: user.user_mail,
          nombre: `${user.user_name || ''} ${user.user_lastName || ''} ${user.user_maternalLastName || ''}`,
          avatar: user.user_avatar
        },
        success: true
      });
    } else {
      res.status(403).json({
        mensaje: 'No tienes permisos suficientes para realizar la operación',
        success: false
      });
    }
  } else {
    res.status(403).json({ mensaje: 'El token es obligatorio', success: false });
  }
}