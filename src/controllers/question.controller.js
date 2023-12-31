import { Op } from "@sequelize/core";
import db, { sequelize } from "../database/models";

export const getQuestions = async (req, res) => {
  try {
    const data = await db.Question.findAll({
      include: [{ model: db.Form }],
    });
    res
      .status(200)
      .json({ data, mensaje: "Operación realizada con exito", success: true });
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al consultar los datos",
      success: false,
    });
  }
};

function isSameDayDateTime(attribute, date) {
  console.log(attribute,date)
  return {
    [attribute]: {
      [Op.and]: {
        [Op.gte]: date + ' 00:00:00',
        [Op.lte]: date + ' 23:59:59.999999',
      }
    }
  }
}

export const getQuestionsByFormByParticipant = async (req, res) => {
  try {
    const data = await db.Question.findAll({
      include: [
        { model: db.Form },
        {
          model: db.Answer,
          where: {
            [Op.and]: [
              { participante_id: req.params.participant_id },
              { answer_createdAt: sequelize.fn('date', req.params.date)}
              // isSameDayDateTime('answer_createdAt', req.params.date),
            ],
          },
        },
      ],
      where: { form_id: req.params.form_id },
    });
    res
      .status(200)
      .json({ data, mensaje: "Operación realizada con exito", success: true });
  } catch (error) {
    res.status(400).json({
      error,
      mensaje: "Ocurrio un error al consultar los datos",
      success: false,
    });
  }
};

export const createQuestion = async (req, res) => {
  try {
    const {
      form_id,
      question_text,
      question_type,
      question_options,
      question_group,
      question_width,
    } = req.body;
    const question = await db.Question.create({
      form_id,
      question_text,
      question_type,
      question_options,
      question_group,
      question_width,
    });
    if (question) {
      res.status(201).json({
        data: question,
        mensaje: "Pregunta agregada con exito",
        success: true,
      });
    } else {
      res.status(400).json({
        mensaje: "Ocurrio un error al crear la pregunta",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al crear la pregunta",
      success: false,
      error,
    });
  }
};

export const getQuestion = async (req, res) => {
  try {
    const question = await db.Question.findByPk(req.params.id);
    if (question) {
      res.status(200).json({
        data: question,
        mensaje: "Operación realizada con exito",
        success: true,
      });
    } else {
      res
        .status(400)
        .json({ mensaje: "Pregunta no encontrada", success: false });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al consultar los datos",
      success: false,
    });
  }
};

export const updateQuestion = async (req, res) => {
  try {
    const question = await db.Question.update(req.body, {
      where: { question_id: req.params.id },
    });
    if (question[0]) {
      res
        .status(200)
        .json({ mensaje: "Pregunta actualizada con exito", success: true });
    } else {
      res
        .status(400)
        .json({ mensaje: "No existe la pregunta", success: false });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al actualizar los datos",
      success: false,
    });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const question = await db.Question.destroy({
      where: { question_id: req.params.id },
    });
    if (question) {
      res
        .status(200)
        .json({ mensaje: "Pregunta eliminada con exito", success: true });
    } else {
      res
        .status(400)
        .json({ mensaje: "No existe la pregunta", success: false });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al eliminar los datos",
      success: false,
    });
  }
};
