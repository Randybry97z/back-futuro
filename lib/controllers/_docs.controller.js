"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPDFTargetById = exports.getPDFParticipante = void 0;
var _models = _interopRequireDefault(require("../database/models"));
var path = require('path');
const pdf = require('html-pdf');
var zip = require('express-zip');
const getPDFTargetById = async (req, res) => {
  try {
    //res.status(200).json({ mensaje: 'Estás por generar un pdf', success: true }) }
    if (req.params.item == 5) {
      let pdfFileCard1 = path.resolve("./src/assets/docs/items-1.pdf");
      let pdfFileCard2 = path.resolve("./src/assets/docs/items-2.pdf");
      let pdfFileCard3 = path.resolve("./src/assets/docs/items-3.pdf");
      let pdfFileCard4 = path.resolve("./src/assets/docs/items-4.pdf");
      res.zip([{
        path: pdfFileCard1,
        name: 'tarjeta-1.pdf'
      }, {
        path: pdfFileCard2,
        name: 'tarjeta-2.pdf'
      }, {
        path: pdfFileCard3,
        name: 'tarjeta-3.pdf'
      }, {
        path: pdfFileCard4,
        name: 'tarjeta-4.pdf'
      }], 'Tarjetas.zip');
    } else {
      let path = require("path");
      let pdfFile = path.resolve("./src/assets/docs/items-".concat(req.params.item, ".pdf"));
      res.download(pdfFile);
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al generar el pfp',
      success: false
    });
  }
};
exports.getPDFTargetById = getPDFTargetById;
const getPDFParticipante = async (req, res) => {
  try {
    const participante = await _models.default.Participante.findByPk(req.params.participanteId, {
      attributes: {
        exclude: ["participante_age"]
      },
      include: [{
        model: _models.default.User,
        attributes: ["user_name"]
      }, {
        model: _models.default.Entity
      }, {
        model: _models.default.InstitutionalizationHistory
      }]
    });
    if (participante) {
      const content = "\n        <!doctype html>\n          <html>\n              <head>\n                  <meta charset=\"utf-8\">\n                  <title>".concat(participante.participante_name, " | Informe</title>\n                  <style>\n                      h1 {\n                          color: black;\n                      }\n                  </style>\n              </head>\n              <body>\n                  <div style=\"width: '100%',display: 'flex', justify-content:'center'\"><h2>").concat(participante.participante_name, " ").concat(participante.participante_lastname, " - Reporte</h2></div>\n                  <div id=\"section\" style=\"border: 1px solid #ddd; padding: 5px; margin-bottom: 1rem\">\n                      <h3>Datos de la Entidad</h3>\n                      <div>\n                        <div class=\"participante_value\"> <b>Nombre: </b> ").concat(participante.participante_name, "</div>\n                        <div class=\"participante_value\"> <b>Apellido Paterno: </b> ").concat(participante.participante_lastname, "</div>\n                        <div class=\"participante_value\"> <b>Apellido Materno: </b> ").concat(participante.participante_second_surname, "</div>\n                        <div class=\"participante_value\"> <b>Fecha de Nacimiento: </b> ").concat(participante.participante_birthday, "</div>\n                        <div class=\"participante_value\"> <b>Correo: </b> ").concat(participante.participante_mail, "</div>\n                        <div class=\"participante_value\"> <b>Tel\xE9fono: </b> ").concat(participante.participante_phone, "</div>\n                        <div class=\"participante_value\"> <b>C\xF3digo Postal: </b> ").concat(participante.participante_code, "</div>\n                        <div class=\"participante_value\"> <b>G\xE9nero: </b> ").concat(participante.participante_gender, "</div>\n                        <div class=\"participante_value\"> <b>Nacionalidad: </b> ").concat(participante.participante_nationality, "</div>\n                        <div class=\"participante_value\"> <b>Lenguaje: </b> ").concat(participante.participante_language, "</div>\n                        <div class=\"participante_value\"> <b>Escolaridad: </b> ").concat(participante.participante_scholarship, "</div>\n                      </div>\n                  </div>\n                  <div id=\"section\" style=\"border: 1px solid #ddd; padding: 5px; margin-bottom: 1rem\">\n                    <h3>Datos de la Entidad</h3>\n                    <div>\n                      <div class=\"participante_value\"> <b>Nombre de la Entidad: </b> ").concat(participante.Entities[0].entity_name, "</div>\n                      <div class=\"participante_value\"> <b>Ciudad: </b> ").concat(participante.Entities[0].entity_city, "</div>\n                      <div class=\"participante_value\"> <b>Direcci\xF3n: </b> ").concat(participante.Entities[0].entity_address, "</div>\n                      <div class=\"participante_value\"> <b>Nombre del representante Legal: </b> ").concat(participante.Entities[0].entity_representative_name, "</div>\n                      <div class=\"participante_value\"> <b>Correo del representante Legal: </b> ").concat(participante.Entities[0].entity_representative_mail, "</div>\n                      <div class=\"participante_value\"> <b>Tel\xE9fono del representante Legal: </b> ").concat(participante.Entities[0].entity_representative_phone, "</div>\n                    </div>\n                  </div>\n                  <div id=\"section\" style=\"border: 1px solid #ddd; padding: 5px; margin-bottom: 1rem\">\n                    <h3>Historial de Institucionalizaci\xF3n</h3>\n                    <div>\n                      <div class=\"participante_value\"> <b>\xBFCu\xE1nto tiempo lleva viviendo sin un alojamiento que puedas considerar propio y estable?: </b> ").concat(participante.InstitutionalizationHistories[0].history_acommodation_time, "</div>\n                      <div class=\"participante_value\"> <b>\xBFD\xF3nde viv\xEDas antes de entrar en este programa?: </b> ").concat(participante.InstitutionalizationHistories[0].history_previous_acommodation, "</div>\n                      <div class=\"participante_value\"> <b>Perfil Ethos: </b> ").concat(participante.InstitutionalizationHistories[0].history_previous_ethos, "</div>\n                      <div class=\"participante_value\"> <b>Aproximadamente, \xBFEn cu\xE1ntas instituciones o recursos de proteccion social has estado antes de llegar a Fururo&Co: </b> ").concat(participante.InstitutionalizationHistories[0].history_quantity_programs, "</div>\n                      <div class=\"participante_value\"> <b>\xBFHas estado en situaci\xF3n de calle?: </b> ").concat(participante.InstitutionalizationHistories[0].history_nohome_state, "</div>\n                      <div class=\"participante_value\"> <b>\xBFHas sufrido alguna situaci\xF3n previa de agresi\xF3n en el entorno de vivienda o alojamiento en el que has estado?: </b> ").concat(participante.InstitutionalizationHistories[0].history_assault_state, "</div>\n                      <div class=\"participante_value\"> <b>Perfil Social: </b> ").concat(participante.InstitutionalizationHistories[0].history_social_profile, "</div>\n                      <div class=\"participante_value\"> <b>Problem\xE1ticas: </b> ").concat(participante.InstitutionalizationHistories[0].history_problematic, "</div>\n                      <div class=\"participante_value\"> <b>Entidad de procedencia: </b> ").concat(participante.InstitutionalizationHistories[0].history_entity, "</div>\n                      <div class=\"participante_value\"> <b>Fecha de Alta: </b> ").concat(participante.InstitutionalizationHistories[0].history_register_date, "</div>\n                      <div class=\"participante_value\"> <b>Fecha de Baja: </b> ").concat(participante.InstitutionalizationHistories[0].history_updown_date, "</div>\n                      <div class=\"participante_value\"> <b>Motivo de baja: </b> ").concat(participante.InstitutionalizationHistories[0].history_updown_reason, "</div>\n                    </div>\n                  </div>\n              </body>\n          </html>\n        ");

      //res.status(200).json({ mensaje: 'Se ha generado el reporte', participante:participante, success: true });   
      pdf.create(content).toFile("./src/assets/docs/informe-".concat(participante.participante_id, ".pdf"), function (err, result) {
        if (err) {
          res.status(400).json({
            mensaje: 'Ocurrio un error al generar el reporte',
            success: false
          });
        } else {
          let path = require("path");
          let pdfFile = path.resolve("./src/assets/docs/informe-".concat(participante.participante_id, ".pdf"));
          res.download(pdfFile);
        }
      });
    } else {
      res.status(400).json({
        mensaje: "participante no encontrado",
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al generar el pfp',
      success: false
    });
  }
};
exports.getPDFParticipante = getPDFParticipante;
//# sourceMappingURL=_docs.controller.js.map