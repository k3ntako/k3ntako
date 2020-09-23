const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const MAIL_SETTINGS = {
  sandboxMode: {
    enable: process.env.NODE_ENV !== "production",
  },
};

const EmailController = {
  async send(req, res, next) {
    try {
      const { name, email, subject, message } = req.body;
      if (!name.trim() || !email.trim() || !message.trim()) {
        new Error("Name, email, and message are required.");
      }

      const messageWithEmailText =
        `Sender email: ${email}\n\n` +
        `Sender: ${name}\n` +
        `Message:\n\n${message}`;

      const messageWithEmailHTML = messageWithEmailText.replace(/\n/gi, "<br>");

      const msg = {
        to: "kentarokaneki@gmail.com",
        from: "no-reply@k3ntako.com",
        subject: subject.trim() || "Email from " + name,
        text: messageWithEmailText,
        html: messageWithEmailHTML,
        mailSettings: MAIL_SETTINGS,
      };

      await sgMail.send(msg);

      res.json({ okay: true });
      next();
    } catch (err) {
      console.error(err);
      console.error(err.response.body.errors);
      next(err);
    }
  },
};

module.exports = EmailController;
