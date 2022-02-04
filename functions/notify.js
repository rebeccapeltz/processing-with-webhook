
exports.handler = async function (event, context) {
    require('dotenv').config();

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'rebeccapeltz@gmail.com',
    from: 'rpeltz@quinnipiac.edu',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log('success', response[0].code);
      console.log(response[0].headers);
      console.log('returning 200');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Processing' }),
      };
    })
    .catch((error) => {
      console.error('error', JSON.stringify(error, 0, 2));
      console.log(error.code);
      console.log(error.response.body);
      const errorMsg = error.response.body.errors[0].message;
      console.log(errorMsg)
      return {
        statusCode: error.code,
        body: errorMsg
      };
    });
};
