require('dotenv').config();
const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
  if (!event.body || event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        status: 'invalid-method',
      }),
    };
  }

  // get data
  const data = JSON.parse(event.body);
  console.log(JSON.stringify(data, null, 2));

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.SENDGRID_API_KEY,
    from: process.env.FROM_VERIFIED_SENDER,
    subject: 'Webhook Notification',
    text: JSON.stringify(data, null, 2),
  };

  try {
    const response = await sgMail.send(msg);
    console.log('success', response[0].statusCode);
    console.log(response[0]);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: response[0] }),
    };
  } catch (error) {
    // console.error('error', JSON.stringify(error, 0, 2));
    // console.log(error.code);
    // console.log(error.response.body);
    // const errorMsg = error.response.body.errors[0].message;
    // console.log(errorMsg);

    return {
      statusCode: error.code,
      body: error.response.body.errors[0].message,
    };
  }
};
