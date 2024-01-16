var path = require('path');
const pdf = require('html-pdf');
import db from "../database/models";
var zip = require('express-zip');


export const getPDFTargetById = async (req, res) => {
  try{
    //res.status(200).json({ mensaje: 'Estás por generar un pdf', success: true }) }
    if(req.params.item == 5){
      
      let pdfFileCard1 = path.resolve(`./src/assets/docs/items-1.pdf`);
      let pdfFileCard2 = path.resolve(`./src/assets/docs/items-2.pdf`);
      let pdfFileCard3 = path.resolve(`./src/assets/docs/items-3.pdf`);
      let pdfFileCard4 = path.resolve(`./src/assets/docs/items-4.pdf`);
      res.zip([
        { path: pdfFileCard1, name: 'tarjeta-1.pdf' },
        { path: pdfFileCard2, name: 'tarjeta-2.pdf' },
        { path: pdfFileCard3, name: 'tarjeta-3.pdf' },
        { path: pdfFileCard4, name: 'tarjeta-4.pdf' },

     ], 'Tarjetas.zip');
    }else{
      let path = require("path");
      let pdfFile = path.resolve(`./src/assets/docs/items-${req.params.item}.pdf`)
      res.download(pdfFile);   
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al generar el pfp', success: false });
  }
}

export const getPDFParticipante = async (req, res) => {
  try{
    const participante = await db.Participante.findByPk(req.params.participanteId, {
      attributes: { exclude: ["participante_age"] },
      include: [{ model: db.User, attributes: ["user_name"] }, {model: db.Entity}, {model: db.InstitutionalizationHistory}],
    });
      if (participante) {
        const content = `
        <!doctype html>
          <html>
              <head>
                  <meta charset="utf-8">
                  <title>${participante.participante_name} | Informe</title>
                  <style>
                      h1 {
                          color: black;
                      }
                  </style>
              </head>
              <body>
                  <div style="width: '100%',display: 'flex', justify-content:'center'"><h2>${participante.participante_name} ${participante.participante_lastname} - Reporte</h2></div>
                  <div id="section" style="border: 1px solid #ddd; padding: 5px; margin-bottom: 1rem">
                      <h3>Datos de la Entidad</h3>
                      <div>
                        <div class="participante_value"> <b>Nombre: </b> ${participante.participante_name}</div>
                        <div class="participante_value"> <b>Apellido Paterno: </b> ${participante.participante_lastname}</div>
                        <div class="participante_value"> <b>Apellido Materno: </b> ${participante.participante_second_surname}</div>
                        <div class="participante_value"> <b>Fecha de Nacimiento: </b> ${participante.participante_birthday}</div>
                        <div class="participante_value"> <b>Correo: </b> ${participante.participante_mail}</div>
                        <div class="participante_value"> <b>Teléfono: </b> ${participante.participante_phone}</div>
                        <div class="participante_value"> <b>Código Postal: </b> ${participante.participante_code}</div>
                        <div class="participante_value"> <b>Género: </b> ${participante.participante_gender}</div>
                        <div class="participante_value"> <b>Nacionalidad: </b> ${participante.participante_nationality}</div>
                        <div class="participante_value"> <b>Lenguaje: </b> ${participante.participante_language}</div>
                        <div class="participante_value"> <b>Escolaridad: </b> ${participante.participante_scholarship}</div>
                      </div>
                  </div>
                  <div id="section" style="border: 1px solid #ddd; padding: 5px; margin-bottom: 1rem">
                    <h3>Datos de la Entidad</h3>
                    <div>
                      <div class="participante_value"> <b>Nombre de la Entidad: </b> ${participante.Entities[0].entity_name}</div>
                      <div class="participante_value"> <b>Ciudad: </b> ${participante.Entities[0].entity_city}</div>
                      <div class="participante_value"> <b>Dirección: </b> ${participante.Entities[0].entity_address}</div>
                      <div class="participante_value"> <b>Nombre del representante Legal: </b> ${participante.Entities[0].entity_representative_name}</div>
                      <div class="participante_value"> <b>Correo del representante Legal: </b> ${participante.Entities[0].entity_representative_mail}</div>
                      <div class="participante_value"> <b>Teléfono del representante Legal: </b> ${participante.Entities[0].entity_representative_phone}</div>
                    </div>
                  </div>
                  <div id="section" style="border: 1px solid #ddd; padding: 5px; margin-bottom: 1rem">
                    <h3>Historial de Institucionalización</h3>
                    <div>
                      <div class="participante_value"> <b>¿Cuánto tiempo lleva viviendo sin un alojamiento que puedas considerar propio y estable?: </b> ${participante.InstitutionalizationHistories[0].history_acommodation_time}</div>
                      <div class="participante_value"> <b>¿Dónde vivías antes de entrar en este programa?: </b> ${participante.InstitutionalizationHistories[0].history_previous_acommodation}</div>
                      <div class="participante_value"> <b>Perfil Ethos: </b> ${participante.InstitutionalizationHistories[0].history_previous_ethos}</div>
                      <div class="participante_value"> <b>Aproximadamente, ¿En cuántas instituciones o recursos de proteccion social has estado antes de llegar a Fururo&Co: </b> ${participante.InstitutionalizationHistories[0].history_quantity_programs}</div>
                      <div class="participante_value"> <b>¿Has estado en situación de calle?: </b> ${participante.InstitutionalizationHistories[0].history_nohome_state}</div>
                      <div class="participante_value"> <b>¿Has sufrido alguna situación previa de agresión en el entorno de vivienda o alojamiento en el que has estado?: </b> ${participante.InstitutionalizationHistories[0].history_assault_state}</div>
                      <div class="participante_value"> <b>Perfil Social: </b> ${participante.InstitutionalizationHistories[0].history_social_profile}</div>
                      <div class="participante_value"> <b>Problemáticas: </b> ${participante.InstitutionalizationHistories[0].history_problematic}</div>
                      <div class="participante_value"> <b>Entidad de procedencia: </b> ${participante.InstitutionalizationHistories[0].history_entity}</div>
                      <div class="participante_value"> <b>Fecha de Alta: </b> ${participante.InstitutionalizationHistories[0].history_register_date}</div>
                      <div class="participante_value"> <b>Fecha de Baja: </b> ${participante.InstitutionalizationHistories[0].history_updown_date}</div>
                      <div class="participante_value"> <b>Motivo de baja: </b> ${participante.InstitutionalizationHistories[0].history_updown_reason}</div>
                    </div>
                  </div>
              </body>
          </html>
        `;

        //res.status(200).json({ mensaje: 'Se ha generado el reporte', participante:participante, success: true });   
        pdf.create(content).toFile(`./src/assets/docs/informe-${participante.participante_id}.pdf`, function(err, result) {
        if (err){
          res.status(400).json({ mensaje: 'Ocurrio un error al generar el reporte', success: false });
        } else {
          let path = require("path");
          let pdfFile = path.resolve(`./src/assets/docs/informe-${participante.participante_id}.pdf`)
          res.download(pdfFile);  
        }
        });
      } else {
        res
          .status(400)
          .json({ mensaje: "participante no encontrado", success: false });
        }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al generar el pfp', success: false });
  }
}