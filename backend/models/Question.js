const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    title: String,
    body: String,
    tags: [],
    created_at: {
        type: Date,
        default: Date.now()
    },
    user: Object,
    commnet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commnets'
    }
})

module.exports = mongoose.model("Question", questionSchema)