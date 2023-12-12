import db, { sequelize } from '../database/models';

export const getAnswers = async (req, res) => {
  try {
    const data = await db.Answer.findAll({
      include: [{ model: db.Question }, { model: db.Participante }]
    });
    res.status(200).json({ data, mensaje: 'Operación realizada con exito', success: true });
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const getAnswersByParticipant = async (req, res) => {
  try {
    const data = await db.Answer.findAll({
      include: [{ model: db.Question, attributes: ['form_id'] }],
      attributes: [[sequelize.fn('date', sequelize.col('answer_createdAt')), 'answer_createdAt']],
      where: {participante_id: req.params.id},
      group: [[sequelize.fn('date', sequelize.col('answer_createdAt')), 'answer_createdAt']]
    });
    res.status(200).json({ data, mensaje: 'Operación realizada con exito', success: true });
  } catch (error) {
    res.status(400).json({ error, mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const createAnswer = async (req, res) => {
  try {
    const { participante_id, question_id, answer_value, answer_createdAt } = req.body;
    const answer = await db.Answer.create({ participante_id, question_id, answer_value, answer_createdAt });
    if (answer) {
      res.status(201).json({ data: answer, mensaje: 'Respuesta agregada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio un error al crear la pregunta', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al crear la respuesta', success: false, error });
  }
}

export const getAnswer = async (req, res) => {
  try {
    const answer = await db.Answer.findByPk(req.params.id);
    if (answer) {
      res.status(200).json({ data: answer, mensaje: 'Operación realizada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'Respuesta no encontrada', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al consultar los datos', success: false });
  }
}

export const updateAnswer = async (req, res) => {
  try {
    const answer = await db.Answer.update(req.body, { where: { answer_id: req.params.id } });
    if (answer[0]) {
      res.status(200).json({ mensaje: 'Respuesta actualizada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe la pregunta', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al actualizar los datos', success: false });
  }
}

export const deleteAnswer = async (req, res) => {
  try {
    const answer = await db.Answer.destroy({ where: { answer_id: req.params.id } });
    if (answer) {
      res.status(200).json({ mensaje: 'Respuesta eliminada con exito', success: true });
    } else {
      res.status(400).json({ mensaje: 'No existe la respuesta', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al eliminar los datos', success: false });
  }
}

export const createAnswers = async (req, res) => {
  try {
    let updates = 0;
    const result = await Promise.all(req.body.map(async ({ participante_id, question_id, answer_value }) => {
      const [answer, created] = await db.Answer.findOrCreate({
        where: { participante_id, question_id },
        defaults: { participante_id, question_id, answer_value }
      });
      if (!created) {
        if (answer.answer_value !== answer_value) {
          const updated = await db.Answer.update({ answer_value }, { where: { answer_id: answer.answer_id } });
          if (updated[0]) updates++;
        }
      }
      return created;
    }))
    if (result) {
      let added = result.filter(opt => opt).length;
      res.status(201).json({ mensaje: `Se guard${added === 1 ? 'o' : 'aron'}: ${added} respuesta${added !== 1 ? 's' : ''}, se actualiz${updates === 1 ? 'o' : 'aron'}: ${updates} respuesta${updates !== 1 ? 's' : ''}.`, success: true });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio un error al guardar las respuestas', success: false });
    }
  } catch (error) {
    res.status(400).json({ mensaje: 'Ocurrio un error al crear las respuestas', success: false, error });
  }
}
