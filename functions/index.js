const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {user: "muthini181@gmail.com", pass: "@Muthini4521"},
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const {name, email, message} = req.body;

  const mailOptions = {
    from: email,
    to: "muthini181@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    return res.status(200).send("Email sent: " + info.response);
  });
});
