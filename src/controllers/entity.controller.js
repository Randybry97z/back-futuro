import db from "../database/models";

export const getEntities = async (req, res) => {
  try {
    const data = await db.Entity.findAll({
      attributes: { exclude: ["participante_id"] },
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

export const createEntity = async (req, res) => {
  try {
    const {
        participante_id,
        entity_name,
        entity_city,
        entity_address,
        entity_representative_name,
        entity_representative_mail,
        entity_representative_phone
    } = req.body;
    const entity = await db.Entity.create({
        participante_id,
        entity_name,
        entity_city,
        entity_address,
        entity_representative_name,
        entity_representative_mail,
        entity_representative_phone
    });
    if (entity) {
      res
        .status(201)
        .json({
          data: entity,
          mensaje: "Entidad creada con exito",
          success: true,
        });
    } else {
      res
        .status(400)
        .json({
          mensaje: "Ocurrio un error al crear la entidad",
          success: false,
        });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al crear la entidad",
        error: error,
        success: false,
      });
  }
};

export const getEntity = async (req, res) => {
  try {
    const entity = await db.Entity.findByPk(req.params.id, {
      attributes: { exclude: ["participante_id"] },
    });
    if (entity) {
      res
        .status(200)
        .json({
          data: entity,
          mensaje: "Operación realizada con exito",
          success: true,
        });
    } else {
      res
        .status(400)
        .json({ mensaje: "entidad no encontrada", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        error,
        mensaje: "Ocurrio un error al consultar los datos",
        success: false,
      });
  }
};

export const updateEntity = async (req, res) => {
  try {
    const entity = await db.Entity.update(req.body, {
      where: { entity_id: req.params.id },
    });
    if (entity[0]) {
      res
        .status(200)
        .json({ mensaje: "Entidad actualizada con exito", success: true });
    } else {
      res.status(400).json({ mensaje: "No existe la entidad", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al actualizar los datos",
        error,
        success: false,
      });
  }
};

export const patchEntity = async (req, res) => {
  try {
    const entity = await db.Entity.update(req.body, {
      where: { entity_id: req.params.id },
    });
    if (entity[0]) {
      res
        .status(200)
        .json({ mensaje: "Entidad actualizada con exito", success: true });
    } else {
      res.status(400).json({ mensaje: "No existe la entidad", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al actualizar los datos",
        error,
        success: false,
      });
  }
};

export const deleteEntity = async (req, res) => {
  try {
    const entity = await db.Entity.destroy({
      where: { entity_id: req.params.id },
    });
    if (entity) {
      res
        .status(200)
        .json({ mensaje: "entidad eliminada con exito", success: true });
    } else {
      res.status(400).json({ mensaje: "No existe la entidad", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        mensaje: "Ocurrio un error al eliminar los datos",
        error,
        success: false,
      });
  }
};
