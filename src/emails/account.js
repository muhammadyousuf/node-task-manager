const sgMail = require("@sendgrid/mail");
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "muhammadyousuf327@gmail.com",
    subject: "Thanks for joininig in!.",
    text: `Welcome to the app, ${name} Let me know how you get along with the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "muhammadyousuf327@gmail.com",
    subject: "Sorry to see you go!.",
    text: `Goodbye, ${name} I hope to see you back sometime soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
