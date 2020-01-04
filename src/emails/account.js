const sgMail = require("@sendgrid/mail");
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "yousufbashir341@gmail.com",
  from: "muhammadyousuf327@gmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js"
});
