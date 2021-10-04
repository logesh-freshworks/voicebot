const Axios = require("axios");

module.exports.hello = async (event) => {
  const { data } = await Axios.get(
    "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
  );

  return {
    statusCode: 200,
    body: JSON.stringify(data?.quotes, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
