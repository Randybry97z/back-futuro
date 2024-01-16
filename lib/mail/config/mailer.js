"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;
const nodemailer = require("nodemailer");
const transporter = exports.transporter = nodemailer.createTransport({
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
transporter.verify(() => {
  console.log("Ready to send email");
});
//# sourceMappingURL=mailer.js.map