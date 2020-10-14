const Log = require('../../models/log')

module.exports = {
    index,
    create
}

async function index(req, res) {
    const logs = await Log.find({user: req.user._id});
    res.status(200).json(logs);
}

async function create(req, res) {
    const log = await Log.create(req.body);
    res.status(201).json(log);
}
