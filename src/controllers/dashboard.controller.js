import db, { sequelize } from '../database/models';

export const generateLineDashboard = async ( req, res ) => {
  try {
    let { participanteId, questionIds } = req.body
    console.log("--------",participanteId, questionIds);
    const data = await db.Answer.findAll({
        include: [{ model: db.Question, attributes: ['form_id', 'question_text'] }],
        attributes: ['answer_value', 'answer_createdAt'],
        where: {participante_id: participanteId, question_id: questionIds},
        });

        let dataDashboard = [];
        for ( let i = 0; i < data.length; i++ ){
          dataDashboard.push(0);
        }
        for ( let i = 0; i < data.length; i++ ){
          dataDashboard[parseInt(data[i].answer_value) - 1] ++ 
        }
        console.log(dataDashboard)
      res.status(200).json({ data, dashboard: dataDashboard, mensaje: 'Operación realizada con exito', success: true });
  } catch (error) {
    console.log(error)
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}