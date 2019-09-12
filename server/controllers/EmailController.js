require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const EmailController = {
  async send(req, res, next){
    try{
      const { name, email, subject, message } = req.body;
      if( !name.trim() || !email.trim() || !message.trim() ){
        new Error("Name, email, and message are required.")
      }

      const messageWithEmail = "Sender email: " + email + "\n\n\nMessage:\n\n" + message;
      const msg = {
        to: 'kentarokaneki@gmail.com',
        from: 'no-reply@k3ntako.com',
        subject: subject || "",
        text: messageWithEmail,
        html: messageWithEmail,
      };

      await sgMail.send(msg);

      res.json({okay: true});
      next();
    } catch(err) {
      console.error(err);
      next(err);
    }
  },

};



module.exports = EmailController;
