const axios = require('axios');

module.exports = {
    index,
}

function index(req, res) {
    axios.get("https://api.adviceslip.com/advice")
    .then(function (response) {
        let advice = response.data.slip.advice
        res.json(advice);
    });
}