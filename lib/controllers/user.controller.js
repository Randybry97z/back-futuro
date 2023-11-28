"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.updatePasswordForgotten = exports.getUsers = exports.getUser = exports.deleteUser = exports.createUser = void 0;
var _models = _interopRequireDefault(require("../database/models"));
var _verification = require("./../mail/utils/verification");
const getUsers = async (req, res) => {
  try {
    const data = await _models.default.User.findAll({
      attributes: {
        exclude: ['user_password']
      },
      include: [{
        model: _models.default.Role,
        attributes: ['role_name']
      }]
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
exports.getUsers = getUsers;
const createUser = async (req, res) => {
  try {
    const {
      user_email,
      user_password,
      user_name,
      user_paternal_surname,
      user_maternal_surname,
      company_id,
      role_id,
      user_avatar
    } = req.body;
    const usuario = await _models.default.User.create({
      user_mail: user_email,
      user_password: await _models.default.User.encryptPassword(user_password),
      user_name,
      user_lastName: user_paternal_surname,
      user_maternalLastName: user_maternal_surname,
      company_id,
      role_id,
      user_avatar,
      user_verified: 0
    });
    res.status(201).json({
      data: usuario,
      mensaje: 'Usuario agregado con exito',
      success: true
    });
    if (usuario) {
      // get user admin to verified email
      // let admin = await db.User.findAll({ attributes: ['user_id', 'user_mail', 'user_name'], where: { user_mail: admin_mail } })
      // sendVerificationEmail(usuario, 1, admin[0])
      res.status(201).json({
        data: usuario,
        mensaje: 'Usuario agregado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Ocurrio un error al crear el usuario',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      data: error,
      mensaje: 'Ocurrio un error al crear el usuario',
      success: false
    });
  }
};
exports.createUser = createUser;
const getUser = async (req, res) => {
  try {
    let requestModels = req.query.include;
    if (requestModels) requestModels = requestModels.split(',');
    const includedModels = [{
      model: _models.default.Role,
      attributes: ['role_name']
    }];
    if (requestModels.length) requestModels.map(model => {
      includedModels.push({
        model: _models.default[model]
      });
    });
    const usuario = await _models.default.User.findByPk(req.params.id, {
      attributes: {
        exclude: ['user_password']
      },
      include: includedModels
    });
    if (usuario) {
      res.status(200).json({
        data: usuario,
        mensaje: 'Operación realizada con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'Usuario no encontrado',
        success: false
      });
    }
  } catch (error) {
    res.status(400).json({
      data: error,
      mensaje: 'Ocurrio un error al consultar los datos',
      success: false
    });
  }
};
exports.getUser = getUser;
const updateUser = async (req, res) => {
  try {
    const usuario = await _models.default.User.update({
      user_name: req.body.user_name,
      user_lastName: req.body.user_lastName,
      user_maternalLastName: req.body.user_maternalLastName,
      user_birthday: req.body.user_birthday,
      user_avatar: req.body.user_avatar
    }, {
      where: {
        user_id: req.params.id
      }
    });
    if (usuario[0]) {
      res.status(200).json({
        mensaje: 'Usuario actualizado con exito',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe el usuario',
        success: false
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Ocurrio un error al actualizar los datos',
      success: false
    });
  }
};
exports.updateUser = updateUser;
const updatePasswordForgotten = async (req, res) => {
  try {
    const userFound = await _models.default.User.findOne({
      where: {
        user_mail: req.params.email
      }
    }, {
      attributes: {
        exclude: ['user_paternal_surname', 'user_maternal_surname', 'user_avatar']
      }
    });
    if (userFound) {
      const passwordGenerated = Math.random().toString(36).slice(-8);
      // Consultar admin de la companía a la que pertenece el usuario que va actualizar contraseña:
      // console.log("userFound", userFound.company_id)
      const usersBycompany = await _models.default.User.findAll({
        where: {
          company_id: userFound.company_id,
          role_id: 1
        }
      }, {
        attributes: {
          exclude: ['user_paternal_surname', 'user_maternal_surname', 'user_avatar']
        }
      });

      // console.log("admins",usersBycompany)

      let recoverySenders = "";
      for (let i = 0; i < usersBycompany.length; i++) {
        recoverySenders = recoverySenders + "".concat(usersBycompany[i].user_mail, ", ");
      }
      //recoverySenders = recoverySenders + `${userFound.user_mail }, `;
      (0, _verification.sendVerificationEmail)(userFound, 2, userFound.user_mail, passwordGenerated, recoverySenders);
      // const user_password = await db.User.encryptPassword(`${passwordGenerated}`);
      // const userUpdated = await db.User.update({
      // user_password: user_password
      // }, { where: { user_id: userFound.user_id } }); userUpdated[0]
      if (passwordGenerated) {
        res.status(200).json({
          mensaje: 'Se ha envíado un correo con la contraseña',
          passwordGenerated,
          success: true
        });
      } else {
        res.status(400).json({
          mensaje: 'No existe el usuario',
          success: false
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      mensaje: 'Ocurrio un error al actualizar los datos',
      success: false
    });
  }
};
exports.updatePasswordForgotten = updatePasswordForgotten;
const deleteUser = async (req, res) => {
  try {
    const {
      id,
      adminId
    } = req.params;
    // get adminInfo to deleted email
    let admin = await _models.default.User.findAll({
      attributes: ['user_id', 'user_mail', 'user_name'],
      where: {
        user_id: adminId
      }
    });
    // get userInfo to deleted email
    let usuario = await _models.default.User.findAll({
      attributes: ['user_id', 'user_mail', 'user_name'],
      where: {
        user_id: id
      }
    });
    if (usuario.length > 0 && admin.length > 0) {
      (0, _verification.sendVerificationEmail)(usuario[0], 0, admin[0]);
      res.status(200).json({
        mensaje: 'Se ha mandado la verificación para eliminar.',
        success: true
      });
    } else {
      res.status(400).json({
        mensaje: 'No existe el usuario o alguno de los valores ingresados.',
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
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map