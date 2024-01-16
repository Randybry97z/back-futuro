const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
secure: false,
requireTLS: true,
port: 587,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'info@compassfaciam.org',
    pass: '23:FuturoAndCo'
  }
});

transporter.verify( () => {
  console.log("Ready to send email");
} )