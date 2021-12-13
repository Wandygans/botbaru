const request = require("request");
const cheerio = require("cheerio");

async function Melon(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: "https://photooxy.com/logo-and-text-effects/watermelon-text-style-186.html",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

module.exports = { Melon }