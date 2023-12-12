import db from "../database/models";

export const getInstitutionalizationHistories = async (req, res) => {
  try {
    const data = await db.InstitutionalizationHistory.findAll({
      attributes: { exclude: ["history_createdAt", "history_updatedAt"] },
      include: [{ model: db.Participante, attributes: ["participante_id"] }],
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

export const createInstitutionalizationHistory = async (req, res) => {
  try {
    const {
      participante_id,
      history_acommodation_time,
      history_previous_acommodation,
      history_previous_ethos,
      history_quantity_programs,
      history_nohome_state,
      history_assault_state,
      history_social_profile,
      history_problematic,
      history_entity,
      history_register_date,
      history_updown_date,
      history_updown_reason,
    } = req.body;
    const institutionalization_history =
      await db.InstitutionalizationHistory.create({
        participante_id,
        history_acommodation_time,
        history_previous_acommodation,
        history_previous_ethos,
        history_quantity_programs,
        history_nohome_state,
        history_assault_state,
        history_social_profile,
        history_problematic,
        history_entity,
        history_register_date,
        history_updown_date,
        history_updown_reason,
      });
    if (institutionalization_history) {
      res.status(201).json({
        data: institutionalization_history,
        mensaje: "InstitutionalizationHistory agregado con exito",
        success: true,
      });
    } else {
      res.status(400).json({
        mensaje:
          "Ocurrio un error al crear la historia de institucionalización",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      error,
      mensaje: "Ocurrio un error al crear la historia de institucionalización",
      success: false,
    });
  }
};

export const getInstitutionalizationHistory = async (req, res) => {
  try {
    const institutionalization_history =
      await db.InstitutionalizationHistory.findByPk(req.params.id, {
        attributes: { exclude: ["history_createdAt", "history_updatedAt"] },
        include: [{ model: db.Participante, attributes: ["participante_id"] }],
      });
    if (institutionalization_history) {
      res.status(200).json({
        data: institutionalization_history,
        mensaje: "Operación realizada con exito",
        success: true,
      });
    } else {
      res
        .status(400)
        .json({ mensaje: "historia de institucionalización no encontrada", success: false });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al consultar los datos",
      success: false,
    });
  }
};

export const updateInstitutionalizationHistory = async (req, res) => {
  try {
    const institutionalization_history = await db.InstitutionalizationHistory.update(req.body, {
      where: { history_id: req.params.id },
    });
    if (institutionalization_history[0]) {
      res
        .status(200)
        .json({ mensaje: "Usuario actualizado con exito", success: true });
    } else {
      res
        .status(400)
        .json({ mensaje: "No existe la historia de institucionalización", success: false });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al actualizar los datos",
      success: false,
    });
  }
};

export const patchInstitutionalizationHistory = async (req, res) => {
  try {
    const institutionalization_history = await db.InstitutionalizationHistory.update(req.body, {
      where: { history_id: req.params.id },
    });
    if (institutionalization_history[0]) {
      res
        .status(200)
        .json({ mensaje: "Usuario actualizado con exito", success: true });
    } else {
      res
        .status(400)
        .json({ mensaje: "No existe la historia de institucionalización", success: false });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al actualizar los datos",
      success: false,
    });
  }
};

export const deleteInstitutionalizationHistory = async (req, res) => {
  try {
    const institutionalization_history = await db.InstitutionalizationHistory.destroy({
      where: { history_id: req.params.id },
    });
    if (institutionalization_history) {
      res
        .status(200)
        .json({ mensaje: "historia de institucionalización eliminada con exito", success: true });
    } else {
      res
        .status(400)
        .json({ mensaje: "No existe la historia de institucionalización", success: false });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Ocurrio un error al eliminar los datos",
      success: false,
    });
  }
};
