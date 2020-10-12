const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const goalSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    completed: Boolean,
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);