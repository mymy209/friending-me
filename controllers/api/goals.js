const Goal = require('../../models/goal');

module.exports = {
    index
}

async function index(req, res) {
    const goals = await Goal.find({user: req.user._id});
    res.status(200).json(goals);
}