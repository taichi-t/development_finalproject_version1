const axios = require("axios")
require("dotenv").config()
let Base64 = require("js-base64").Base64

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
exports.handler = (event, context, callback) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }
  try {
    axios
      .post(process.env.GATSBY_URL, event.body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Base64.encode(
            process.env.GATSBY_USERNAME + ":" + process.env.GATSBY_API_KEY
          )}`,
        },
      })
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ success: true }),
        })
      })
  } catch (e) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ success: false }),
    })
  }
}
