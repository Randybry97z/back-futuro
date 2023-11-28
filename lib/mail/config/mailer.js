"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;
const nodemailer = require("nodemailer");
const transporter = exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'douglasskick17@gmail.com',
    pass: 'pefc uyeq xgdz btcm'
  }
});
transporter.verify(() => {
  console.log("Ready to send email");
});
//# sourceMappingURL=mailer.js.map