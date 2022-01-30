const axios = require("axios");


exports.handler = async function (event, context) {

  const config = {
    url: 'https://api.chucknorris.io/jokes/random',
    method: 'get',
  };
  try {
    const response = await axios(config);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: response.data }),
    };
  } catch (error) {
    return {
      statusCode: 422,
      body: `Error: ${error}`,
    };
  }
};

