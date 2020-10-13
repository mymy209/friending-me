const Goal = require('../../models/goal');

module.exports = {
    index, 
    create
}

async function index(req, res) {
    const goals = await Goal.find({user: req.user._id});
    res.status(200).json(goals);
}

async function create(req, res) {
    const goal = await Goal.create(req.body);
    res.status(201).json(goal);
}