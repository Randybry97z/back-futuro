import { transporter } from "../mail/config/mailer"
import { sendVerificationEmail } from "../mail/utils/verification"
const path = require('node:path'); 
import bcrypt from "bcryptjs";
import db from "../database/models";
import seq from "sequelize";
const op = seq.Op;

export const createMail = async ( req, res ) => {
  try {
    const { email_sender, email_receiver, email_subject, email_body_html } = req.body;

    console.log("newDate", new Date(), "addedTime", addMinutes(new Date(), 5), "dateNow", Date.now())

    db.Token.unscoped().findAll({ attributes: [ 'token_uniqueString', 'token_expiredAt', 'token_createdAt', 'token_updatedAt', 'token_deletedAt' ], where: { user_id: 91 }})
    .then((result) => {
      console.log(result[0].token_uniqueString)
      res.status(200).json({ token: result })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({error: error});
    })

    // send mail with defined transport object
    /*
    const info = await transporter.sendMail({
      from: process.env.AUTH_EMAIL, // sender address
      to: email_receiver ? email_receiver : "douglasskick@gmail.com", // list of receivers
      subject: email_subject, // Subject line
      html: email_body_html, // html body
    });
    console.log("Message sent: %s", info.messageId);
    */
    //return res.status(200).json({ mensaje: "Mensaje enviado con éxito", success: true, dateNow: new Date(), dateAdded: addMinutes(new Date(), 5) })
  } catch( error ) {
    console.log(error)
    return res.status(400).json({ mensaje: "Algo salió mal!", success: false })
  }
}

export const approveUserEmail = async ( req, res ) => {
  try{
    res.status(301).json({mensaje: "mail to send"})
  } catch( error ) {
    console.log( error );
    return res.status(400).json({ mensaje: "Algo salió mal", success: false })
  }
}
// verify to createuser email
export const verifyEmail = async ( req, res ) => {
  try{
    let { userId, uniqueString } = req.params;

    //console.log("verificationStatus", verificationOption)

    const tokenByUserId = await db.Token.unscoped().findAll({ attributes: [ 'token_uniqueString', 'token_expiredAt', 'user_id' ], where: { user_id: userId }})
    if(tokenByUserId){
      // user verification record exists so we proceed
      const token_expiredAt = tokenByUserId[0].token_expiredAt
      const hashedUniqueString = tokenByUserId[0].token_uniqueString;
      const userId = tokenByUserId[0].user_id
      
        // cheking for expired

        if( token_expiredAt < new Date() ){
          // record has expired so we delete it 
          const deletedVerificationToken = await db.Token.destroy({ where: { user_id: userId } });
          if(deletedVerificationToken){
            const deletedUserNoValidated = await db.User.destroy({ where: { user_id: userId } });
            if( deletedUserNoValidated ){
              let message = "Link has expired. Please sing up again"
              return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
            }else{               
              let message = "Clearing user with expired unique string failed"
              return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
            }

          } else {
            let message = "An error ocurred while clearing expired user verification record"
            return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
          }
        }else {
          // valid record exist so we validate string
          // first compare the hashed uniqued string
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then( async (result) => {
              // strings match
              if( result ){
                const userUpdateVerification = await db.User.update({ user_verified: 1 }, { where: { user_id: userId } });
                if( userUpdateVerification[0] ){
                  const deletedVerificationToken = await db.Token.destroy({ where: { user_id: userId } });
                  if(deletedVerificationToken){
                    res.sendFile(path.join(__dirname, "./../views/verified.html"));
                  }else {
                    let message = "An error ocurred while clearing expired user verification record"
                    return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
                  }
                }else{
                  let message = "An error ocurred while comparing unique strings."
                  return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
                }
              }else{
                // Existing record but incorrect verification detailes passed                    
                let message = "Invalid verification details passed. Check your inbox."
                return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
              }
            })
            .catch((error) => {
              console.log( error );
              let message = "An error ocurred while comparing unique strings."
              return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
            })
        }
      } else {
        let message = "Account record doesn't exist or has been verified already. Please sing up or log in."
        return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`);
      }
  } catch( error ) {
    console.log( error );
    return res.status(400).json({ mensaje: "Algo salió mal", success: false });
  }
}
// verify to deletuser email
export const verifyToDeletedEmail = async ( req, res ) => {
  try{
    let { userId, uniqueString } = req.params;

    const tokenByUserId = await db.Token.unscoped().findAll({ attributes: [ 'token_uniqueString', 'token_expiredAt', 'user_id' ], where: { user_id: userId }})
    console.log("token to delete", tokenByUserId, userId, uniqueString)
    if(tokenByUserId){
      // user verification record exists so we proceed
      const token_expiredAt = tokenByUserId[0].token_expiredAt
      const hashedUniqueString = tokenByUserId[0].token_uniqueString;
      const userId = tokenByUserId[0].user_id
      
        // cheking for expired

        if( token_expiredAt < new Date() ){
          // record has expired so we delete it 
          const deletedVerificationToken = await db.Token.destroy({ where: { user_id: userId } });
          if(deletedVerificationToken){            
            let message = "Link to delete has expired. Please Delet user again"
            return res.redirect(`/api/v1/data/email/verifyEmailToDelete/=true&message${message}`);
          } else {
            let message = "An error ocurred while clearing expired user verification record"
            return res.redirect(`/api/v1/dataemail/verifyEmailToDelete/error=true&message${message}`)
          }
        }else {
          // valid record exist so we validate string
          // first compare the hashed uniqued string
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then( async (result) => {
              // strings match
              if( result ){
                const deletedVerificationToken = await db.Token.destroy({ where: { user_id: userId } });
                if( deletedVerificationToken ){
                  const userDeleted = await db.User.destroy( { where: { user_id: userId } });
                  if( userDeleted){
                    res.sendFile(path.join(__dirname, "./../views/verified_delete.html"));
                  }else {
                    let message = "An error ocurred while clearing expired user verification record"
                    return res.redirect(`/api/v1/data/email/verifyDeleteEmail/error=true&message${message}`)
                  }
                }else{
                  let message = "An error ocurred while comparing unique strings."
                  return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
                }
              }else{
                // Existing record but incorrect verification detailes passed                    
                let message = "Invalid verification details passed. Check your inbox."
                return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
              }
            })
            .catch((error) => {
              console.log( error );
              let message = "An error ocurred while comparing unique strings."
              return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`)
            })
        }
      } else {
        let message = "Account record doesn't exist or has been verified already. Please sing up or log in."
        return res.redirect(`/api/v1/data/email/verifyEmail/error=true&message${message}`);
      }
  } catch( error ) {
    console.log( error );
    return res.status(400).json({ mensaje: "Algo salió mal", success: false });
  }
}
// update to forgotPsw email
export const updateToForgotPsw  = async ( req, res ) => {
  try{
    const { userId, passwordGenerated } = req.params;

    const tokenByUserId = await db.Token.unscoped().findAll({ attributes: [ 'token_uniqueString', 'token_expiredAt', 'user_id' ], where: { user_id: userId }})
    console.log("updareForgotPsw", userId, passwordGenerated)
    if(tokenByUserId){
      // user verification record exists so we proceed
      const token_expiredAt = tokenByUserId[0].token_expiredAt
      const userId = tokenByUserId[0].user_id
      
        // cheking for expired
        if( token_expiredAt < new Date() ){
          // record has expired so we delete it 
          const deletedVerificationToken = await db.Token.destroy({ where: { user_id: userId } });
          if(deletedVerificationToken){            
            let message = "Link to update ássword has expired. Please try again"
            return res.redirect(`/api/v1/data/email/forgotPswEmail/=true&message${message}`);
          } else {
            let message = "An error ocurred while clearing expired user verification record"
            return res.redirect(`/api/v1/dataemail/forgotPswEmail/error=true&message${message}`)
          }
        }else {
          // valid record exist so we validate string
          // first compare the hashed uniqued string
          const passwordGenerated = Math.random().toString(36).slice(-8);
          const user_password = await db.User.encryptPassword(`${passwordGenerated}`);
          const userUpdated = await db.User.update({user_password: user_password}, 
                                                   { where: { user_id: userId } })
                .then( async (result) => {
                  const deletedVerificationToken = await db.Token.destroy({ where: { user_id: userId } });
                  console.log("destroyToken", deletedVerificationToken)
                  res.sendFile(path.join(__dirname, "./../views/forgot_password.html"));
                })
                .catch(error => {
                  console.log(error);
                  let message = "An error ocurred while update password"
                  return res.redirect(`/api/v1/data/email/forgotPswEmail/error=true&message${message}`);
                });
          console.log(userUpdated)
        }
      } else {
        let message = "Account record doesn't exist or has been verified already. Please sing up or log in."
        return res.redirect(`/api/v1/data/email/forgotPswEmail/error=true&message${message}`);
      }
  } catch( error ) {
    console.log( error );
    return res.status(400).json({ mensaje: "Algo salió mal", success: false });
  }
}

// verify page route
export const verifyEmailPage = async ( req, res ) => {
  res.sendFile(path.join(__dirname, "./../views/verified.html"));
}
// verify to delete page route
export const verifyEmailDeletePage = async ( req, res ) => {
  res.sendFile(path.join(__dirname, "./../views/verified_delete.html"));
}
// forgot psw page route
export const forgotPswPage = async ( req, res ) => {
  res.sendFile(path.join(__dirname, "./../views/forgot_password.html"));
}

// add  min to Date now
function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);

  return date;
}


// Template configuration for sendEmail ( to use into emailController request )
// const info = await transporter.sendMail({
//   from: '"FuturoCo Email Testing 👻" <douglasskick17@mail.com>', // sender address
//   to: "douglasskick@gmail.com, jorgeluis_942009@hotmail.com, bssandovalrod@gmail.com", // list of receivers
//   subject: "FuturoCo Bienvenido", // Subject line
//   text: "Este es un correo de prueba, ignorar :p", // use this or html for body
//   html: "<h3>Correo de Prueba</h3><br>Ignorar mensaje, wasaaaaa👻", // use this or text for body
// });