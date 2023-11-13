"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendVerificationEmail = void 0;
var _uuidv = require("uuidv4");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _models = _interopRequireDefault(require("../../database/models"));
var _mailer = require("../config/mailer");
// Verification email
const sendVerificationEmail = async function (usuario, verificationOption, admin) {
  let passwordGenerated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  let recoverySenders = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  const {
    user_id,
    user_mail
  } = usuario;
  const adminMail = admin.user_mail;
  //  console.log("verification", user_id, user_mail, adminMail);
  //  console.log(passwordGenerated);
  //  console.log(recoverySenders);

  const uniqueString = (0, _uuidv.uuid)() + user_id;
  // console.log(uniqueString, "href:", `${process.env.CURRENT_URL+"user/verify/"+user_id+"/"+uniqueString}`);

  //mail options for create user
  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    // sender address
    to: adminMail,
    // list of receivers
    subject: "Aprobación de usuario | FuturoCo",
    // Subject line 
    html: "<div><p>Verifica tu correo el\xE9ctr\xF3nico para completar el registro de tu cuenta.</p>\n               <p>En el siguiente link expira en 6 hrs</p>\n               <a href=\"".concat(process.env.CURRENT_URL + "api/v1/data/email/verifyEmail/" + user_id + "/" + uniqueString, "\">VERIFICAR</a>\n          </div>") // html body
  };

  //mail options for delete User
  const mailDeleteOptions = {
    from: process.env.AUTH_EMAIL,
    // sender address
    to: adminMail,
    // list of receivers
    subject: "Desactivación de usuario | FuturoCo",
    // Subject line 
    html: "<div><p>Verificaci\xF3n de desactivaci\xF3n de usuario</p>\n                <p>En el siguiente link expira en 6 hrs</p>\n                <a href=\"".concat(process.env.CURRENT_URL + "api/v1/data/email/verifyEmailToDelete/" + user_id + "/" + uniqueString, "\">VERIFICAR</a>\n            </div>") // html body
  };

  //mail options for delete User
  const mailForgotPswOptions = {
    from: process.env.AUTH_EMAIL,
    // sender address
    to: admin,
    bcc: recoverySenders,
    // list of receivers
    subject: "Correo de Recuperación de Contraseña | FuturoCo",
    // Subject line 
    html: "<div><p>Su nueva contrase\xF1a: <strong>".concat(passwordGenerated, "</strong></p>\n                <p>Recuerda ir al Link que se encuentra abajo para confirmar el cambio, de lo contrario el procedimiento se debe repetir </p>\n                <br>\n                <strong>El Link expira en 6 horas.</strong>\n                <a href=\"").concat(process.env.CURRENT_URL + "api/v1/data/email/forgotPswEmail/" + user_id + "/" + passwordGenerated, "\">RECUPERAR</a>\n            </div>") // html body
  };

  // hash the uniqueString
  const saltRound = 10;
  _bcryptjs.default.hash(uniqueString, saltRound).then(hashedUniqueString => {
    // set values in verification token
    _models.default.Token.create({
      token_uniqueString: hashedUniqueString,
      token_createdAt: new Date(),
      token_expiredAt: addMinutes(new Date(), 2),
      user_id
    }).then(result => {
      // console.log("resgistrado", result)
      _mailer.transporter.sendMail(verificationOption == 1 ? mailOptions : verificationOption == 0 ? mailDeleteOptions : verificationOption == 2 ? mailForgotPswOptions : verificationOption);
    }).catch(error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }).catch(error => {
    console.log(error);
  });
};

// add  min to Date now
exports.sendVerificationEmail = sendVerificationEmail;
function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}