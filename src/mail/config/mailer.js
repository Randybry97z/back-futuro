const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'douglasskick17@gmail.com',
    pass: 'pefc uyeq xgdz btcm'
  }
});

transporter.verify( () => {
  console.log("Ready to send email");
} )