import db from "../database/models";

export const getParticipantes = async (req, res) => {
  try {
    const data = await db.Participante.findAll({
      attributes: { exclude: ["participante_age"] },
      include: [{ model: db.User, attributes: ["user_name"] }],
    });
    res
      .status(200)
      .json({ data, mensaje: "Operación realizada con exito", success: true });
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al consultar los datos",
        success: false,
      });
  }
};

export const createParticipante = async (req, res) => {
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
      user_id,
    } = req.body;
    const participante = await db.Participante.create({
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
      user_id,
    });
    if (participante) {
      res
        .status(201)
        .json({
          data: participante,
          mensaje: "Participante agregado con exito",
          success: true,
        });
    } else {
      res
        .status(400)
        .json({
          mensaje: "Ocurrio un error al crear el participante",
          success: false,
        });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al crear el participante",
        success: false,
      });
  }
};

export const getParticipante = async (req, res) => {
  try {
    const participante = await db.Participante.findByPk(req.params.id, {
      attributes: { exclude: ["participante_age"] },
      include: [{ model: db.User, attributes: ["user_name"] }],
    });
    if (participante) {
      res
        .status(200)
        .json({
          data: participante,
          mensaje: "Operación realizada con exito",
          success: true,
        });
    } else {
      res
        .status(400)
        .json({ mensaje: "participante no encontrado", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al consultar los datos",
        success: false,
      });
  }
};

export const updateParticipante = async (req, res) => {
  try {
    const participante = await db.Participante.update(req.body, {
      where: { participante_id: req.params.id },
    });
    if (participante[0]) {
      res
        .status(200)
        .json({ mensaje: "Usuario actualizado con exito", success: true });
    } else {
      res.status(400).json({ mensaje: "No existe el participante", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al actualizar los datos",
        success: false,
      });
  }
};

export const deleteParticipante = async (req, res) => {
  try {
    const participante = await db.Participante.destroy({
      where: { participante_id: req.params.id },
    });
    if (participante) {
      res
        .status(200)
        .json({ mensaje: "participante eliminado con exito", success: true });
    } else {
      res.status(400).json({ mensaje: "No existe el participante", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al eliminar los datos",
        success: false,
      });
  }
};
