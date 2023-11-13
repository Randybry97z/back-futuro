"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateParticipante = exports.getParticipantes = exports.getParticipante = exports.deleteParticipante = exports.createParticipante = void 0;
var _models = _interopRequireDefault(require("../database/models"));
const getParticipantes = async (req, res) => {
  try {
    const data = await _models.default.Participante.findAll({
      attributes: {
        exclude: ["participante_age"]
      },
      include: [{
        model: _models.default.User,
        attributes: ["user_name"]
      }]
    });
    res.status(200).json({
      data,
      mensaje: "Operación realizada con exito",
      success: true
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al consultar los datos",
      success: false
    });
  }
};
exports.getParticipantes = getParticipantes;
const createParticipante = async (req, res) => {
  try {
    const {
      participante_id,
      participante_name,
      participante_lastname,
      participante_second_surname,
      participante_birthday,
      participante_age,
      participante_mail,
      participante_phone,
      participante_code,
      participante_gender,
      participante_nationality,
      participante_language,
      participante_scholarship,
      user_id
    } = req.body;
    const participante = await _models.default.Participante.create({
      participante_id,
      participante_name,
      participante_lastname,
      participante_second_surname,
      participante_birthday,
      participante_age,
      participante_mail,
      participante_phone,
      participante_code,
      participante_gender,
      participante_nationality,
      participante_language,
      participante_scholarship,
      user_id
    });
    if (participante) {
      res.status(201).json({
        data: participante,
        mensaje: "Participante agregado con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "Ocurrio un error al crear el participante",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al crear el participante",
      success: false
    });
  }
};
exports.createParticipante = createParticipante;
const getParticipante = async (req, res) => {
  try {
    const participante = await _models.default.Participante.findByPk(req.params.id, {
      attributes: {
        exclude: ["participante_age"]
      },
      include: [{
        model: _models.default.User,
        attributes: ["user_name"]
      }]
    });
    if (participante) {
      res.status(200).json({
        data: participante,
        mensaje: "Operación realizada con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "participante no encontrado",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al consultar los datos",
      success: false
    });
  }
};
exports.getParticipante = getParticipante;
const updateParticipante = async (req, res) => {
  try {
    const participante = await _models.default.Participante.update(req.body, {
      where: {
        participante_id: req.params.id
      }
    });
    if (participante[0]) {
      res.status(200).json({
        mensaje: "Usuario actualizado con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe el participante",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al actualizar los datos",
      success: false
    });
  }
};
exports.updateParticipante = updateParticipante;
const deleteParticipante = async (req, res) => {
  try {
    const participante = await _models.default.Participante.destroy({
      where: {
        participante_id: req.params.id
      }
    });
    if (participante) {
      res.status(200).json({
        mensaje: "participante eliminado con exito",
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: "No existe el participante",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al eliminar los datos",
      success: false
    });
  }
};
exports.deleteParticipante = deleteParticipante;