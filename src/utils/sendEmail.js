const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST, //process.env.
    port: process.env.SMPT_PORT, //process.env.
    service: process.env.SMPT_SERVICE, //process.env.
    auth: {
      user: process.env.SMPT_MAIL, //process.env.
      pass: process.env.SMPT_PASSWORD, //process.env.
    },
  });

  const mailOptions = {
    from: SMPT_MAIL, //process.env.
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;