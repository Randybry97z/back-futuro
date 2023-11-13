import { uuid } from "uuidv4";
import bcrypt from "bcryptjs";
import db from "../../database/models";
import { transporter } from "../config/mailer";

// Verification email
export const sendVerificationEmail = async (usuario, verificationOption, admin, passwordGenerated = '', recoverySenders = '') => {
  const { user_id, user_mail } = usuario;
  const adminMail = admin.user_mail
  //  console.log("verification", user_id, user_mail, adminMail);
  //  console.log(passwordGenerated);
  //  console.log(recoverySenders);

  const uniqueString = uuid() + user_id;
  // console.log(uniqueString, "href:", `${process.env.CURRENT_URL+"user/verify/"+user_id+"/"+uniqueString}`);

  //mail options for create user
  const mailOptions = {
    from: process.env.AUTH_EMAIL, // sender address
    to: adminMail, // list of receivers
    subject: "Aprobación de usuario | FuturoCo", // Subject line 
    html: `<div><p>Verifica tu correo eléctrónico para completar el registro de tu cuenta.</p>
               <p>En el siguiente link expira en 6 hrs</p>
               <a href="${process.env.CURRENT_URL+"api/v1/data/email/verifyEmail/"+user_id+"/"+uniqueString}">VERIFICAR</a>
          </div>`, // html body
  }

  //mail options for delete User
  const mailDeleteOptions = {
    from: process.env.AUTH_EMAIL, // sender address
    to: adminMail, // list of receivers
    subject: "Desactivación de usuario | FuturoCo", // Subject line 
    html: `<div><p>Verificación de desactivación de usuario</p>
                <p>En el siguiente link expira en 6 hrs</p>
                <a href="${process.env.CURRENT_URL+"api/v1/data/email/verifyEmailToDelete/"+user_id+"/"+uniqueString}">VERIFICAR</a>
            </div>`, // html body
  }

//mail options for delete User
  const mailForgotPswOptions = {
    from: process.env.AUTH_EMAIL, // sender address
    to: admin,
    bcc: recoverySenders, // list of receivers
    subject: "Correo de Recuperación de Contraseña | FuturoCo", // Subject line 
    html: `<div><p>Su nueva contraseña: <strong>${passwordGenerated}</strong></p>
                <p>Recuerda ir al Link que se encuentra abajo para confirmar el cambio, de lo contrario el procedimiento se debe repetir </p>
                <br>
                <strong>El Link expira en 6 horas.</strong>
                <a href="${process.env.CURRENT_URL+"api/v1/data/email/forgotPswEmail/"+user_id+"/"+passwordGenerated}">RECUPERAR</a>
            </div>`, // html body
  }

  // hash the uniqueString
  const saltRound = 10;
  bcrypt
    .hash( uniqueString, saltRound )
    .then( (hashedUniqueString) => {
        // set values in verification token
        db.Token.create({
            token_uniqueString: hashedUniqueString,
            token_createdAt: new Date(),
            token_expiredAt: addMinutes(new Date(), 2),
            user_id
        })
        .then((result)=> {
            // console.log("resgistrado", result)
            transporter.sendMail(verificationOption == 1 ? mailOptions : 
                                  verificationOption == 0 ? mailDeleteOptions :
                                   verificationOption == 2 ? mailForgotPswOptions : verificationOption);
        })
        .catch((error) => {
            console.log(error);
        })
        .catch((error) =>{
            console.log(error)
        })
    } )
    .catch((error)=>{
        console.log(error)
    })
}

  // add  min to Date now
  function addMinutes(date, minutes) {
    date.setMinutes(date.getMinutes() + minutes);
  
    return date;
  }