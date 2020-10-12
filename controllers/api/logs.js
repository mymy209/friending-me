const request = require('request');
const adviceURL = 'https://api.adviceslip.com/advice';

module.exports = {
    index
}

async function index(req, res) {
    request(adviceURL, function(err, response, body) {
        console.log(body);
    });
    res.status(200).json();
}
