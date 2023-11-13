import db from '../database/models';

export const getCompanies = async (req, res) => {
  try {
    const data = await db.Company.findAll({
      attributes: { include: ['company_name', 'company_description', 'company_address', 'company_code'] }
    });
    res.status(200).json({ data, mensaje: 'Operación realizada con exito', success: true });
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const createCompany = async (req, res) => {
  try {
    const { company_name, company_description, company_address, company_code } = req.body;
    const company = await db.Company.create({ company_name, company_description, company_address, company_code });
    if (company) {
      res.status(201).json({ data: company, mensaje: 'Compañia agregada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio un error al crear la compañia', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al crear la compañia', success: false });
  }
}

export const getCompany = async (req, res) => {
  try {
    const company = await db.Company.findByPk(req.params.id, {
      attributes: { include: ['company_name', 'company_description', 'company_address', 'company_code'] }
    });
    if (company) {
      res.status(200).json({ data: company, mensaje: 'Operación realizada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Compañia no encontrada', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const updateCompany = async (req, res) => {
  try {
    const company = await db.Company.update(req.body, { where: { company_id: req.params.id } });
    if (company[0]) {
      res.status(200).json({ mensaje: 'Compañia actualizada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe la compañia', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al actualizar los datos', success: false });
  }
}

export const deleteCompany = async (req, res) => {
  try {
    const company = await db.Company.destroy({ where: { company_id: req.params.id } });
    if (company) {
      res.status(200).json({ mensaje: 'Compañia eliminada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe la compañia', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al eliminar los datos', success: false });
  }
}