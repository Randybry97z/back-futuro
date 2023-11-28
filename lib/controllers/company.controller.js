"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCompany = exports.getCompany = exports.getCompanies = exports.deleteCompany = exports.createCompany = void 0;
var _models = _interopRequireDefault(require("../database/models"));
const getCompanies = async (req, res) => {
  try {
    const data = await _models.default.Company.findAll({
      attributes: {
        include: ['company_name', 'company_description', 'company_address', 'company_code']
      }
    });
    res.status(200).json({
      data,
      mensaje: 'Operación realizada con exito',
      success: true
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al consultar los datos',
      success: false
    });
  }
};
exports.getCompanies = getCompanies;
const createCompany = async (req, res) => {
  try {
    const {
      company_name,
      company_description,
      company_address,
      company_code
    } = req.body;
    const company = await _models.default.Company.create({
      company_name,
      company_description,
      company_address,
      company_code
    });
    if (company) {
      res.status(201).json({
        data: company,
        mensaje: 'Compañia agregada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Ocurrio un error al crear la compañia',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al crear la compañia',
      success: false
    });
  }
};
exports.createCompany = createCompany;
const getCompany = async (req, res) => {
  try {
    const company = await _models.default.Company.findByPk(req.params.id, {
      attributes: {
        include: ['company_name', 'company_description', 'company_address', 'company_code']
      }
    });
    if (company) {
      res.status(200).json({
        data: company,
        mensaje: 'Operación realizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Compañia no encontrada',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al consultar los datos',
      success: false
    });
  }
};
exports.getCompany = getCompany;
const updateCompany = async (req, res) => {
  try {
    const company = await _models.default.Company.update(req.body, {
      where: {
        company_id: req.params.id
      }
    });
    if (company[0]) {
      res.status(200).json({
        mensaje: 'Compañia actualizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe la compañia',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al actualizar los datos',
      success: false
    });
  }
};
exports.updateCompany = updateCompany;
const deleteCompany = async (req, res) => {
  try {
    const company = await _models.default.Company.destroy({
      where: {
        company_id: req.params.id
      }
    });
    if (company) {
      res.status(200).json({
        mensaje: 'Compañia eliminada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe la compañia',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al eliminar los datos',
      success: false
    });
  }
};
exports.deleteCompany = deleteCompany;
//# sourceMappingURL=company.controller.js.map