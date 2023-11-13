import db from '../database/models';

export const getForms = async (req, res) => {
  try {
    const data = await db.Form.findAll({
      include: [{ model: db.Question }]
    });
    res.status(200).json({ data, mensaje: 'Operación realizada con exito', success: true });
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const createForm = async (req, res) => {
  try {
    const { user_id, form_name, form_description, form_departamento, form_type } = req.body;
    const form = await db.Form.create({ user_id, form_name, form_description, form_departamento, form_type });
    if (form) {
      res.status(201).json({ data: form, mensaje: 'Formulario agregado con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio un error al crear el formulario', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al crear el formulario', success: false, error });
  }
}

export const getForm = async (req, res) => {
  try {
    const form = await db.Form.findByPk(req.params.id, {
      include: [{ model: db.Question }]
    });
    if (form) {
      res.status(200).json({ data: form, mensaje: 'Operación realizada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Formulario no encontrado', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const updateForm = async (req, res) => {
  try {
    const form = await db.Form.update(req.body, { where: { form_id: req.params.id } });
    if (form[0]) {
      res.status(200).json({ mensaje: 'Formulario actualizado con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe el formulario', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al actualizar los datos', success: false });
  }
}

export const deleteForm = async (req, res) => {
  try {
    const form = await db.Form.destroy({ where: { form_id: req.params.id } });
    if (form) {
      res.status(200).json({ mensaje: 'Formulario eliminado con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe el formulario', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al eliminar los datos', success: false });
  }
}