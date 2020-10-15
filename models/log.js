const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const logSchema = new Schema({
    emotion: {
        type: String, 
        required: true
    },
    description: String,
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Log', logSchema);