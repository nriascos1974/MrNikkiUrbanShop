require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TEMPLATE_ID_SIGNUP = process.env.SENDGRID_TEMPLATE_ID_SIGNUP;
const SENDGRID_TEMPLATE_ID_RECOVERY = process.env.SENDGRID_TEMPLATE_ID_RECOVERY;


sgMail.setApiKey(SENDGRID_API_KEY);


async function sendWelcomeEmail(email,code) {

  const msg = {
    to: email,
    from: 'pactopf2023@gmail.com',
    templateId: SENDGRID_TEMPLATE_ID_SIGNUP,
    dynamic_template_data: {
      code: code,
      // más datos dinámicos aquí...
    },
    
  };

  await sgMail.send(msg);
}

async function sendRecoveryEmail(email,code) {

  const msg = {
    to: email,
    from: 'pactopf2023@gmail.com',
    templateId: SENDGRID_TEMPLATE_ID_RECOVERY,
    dynamic_template_data: {
      code: code,
      // más datos dinámicos aquí...
    },
    
  };

  await sgMail.send(msg);
}




module.exports = {sendWelcomeEmail, sendRecoveryEmail}