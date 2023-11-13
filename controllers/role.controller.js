import db from '../database/models';

export const getRoles = async (req, res) => {
  try {
    const data = await db.Role.findAll({
      attributes: ['role_name', 'role_description']
    });
    res.status(200).json({ data, mensaje: 'Operación realizada con exito', success: true });
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const createRole = async (req, res) => {
  try {
    const { role_name, role_description } = req.body;
    const rol = await db.Role.create({ role_name, role_description });
    if (rol) {
      res.status(201).json({ data: rol, mensaje: 'Rol agregado con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio un error al crear el rol', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al crear el rol', success: false });
  }
}

export const getRole = async (req, res) => {
  try {
    const rol = await db.Role.findByPk(req.params.id, {
      attributes: ['role_name', 'role_description']
    });
    if (rol) {
      res.status(200).json({ data: rol, mensaje: 'Operación realizada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Rol no encontrado', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const updateRole = async (req, res) => {
  try {
    const rol = await db.Role.update(req.body, { where: { role_id: req.params.id } });
    if (rol[0]) {
      res.status(200).json({ mensaje: 'Rol actualizado con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe el rol', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al actualizar los datos', success: false });
  }
}

export const deleteRole = async (req, res) => {
  try {
    const rol = await db.Role.destroy({ where: { role_id: req.params.id } });
    if (rol) {
      res.status(200).json({ mensaje: 'Rol eliminado con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe el rol', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al eliminar los datos', success: false });
  }
}