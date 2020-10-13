const Goal = require('../../models/goal');

module.exports = {
    index, 
    create, 
    delete: deleteOne,
    update
}

async function index(req, res) {
    const goals = await Goal.find({user: req.user._id});
    res.status(200).json(goals);
}

async function create(req, res) {
    const goal = await Goal.create(req.body);
    res.status(201).json(goal);
}

async function deleteOne(req, res) {
    const deletedGoal = await Goal.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedGoal);
}

async function update(req, res) {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedGoal);
  }