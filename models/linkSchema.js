const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    short:{
        type: String,
        required: true
    },
    full:{
        type: String,
        required: true
    }
})

const Link = mongoose.model('Link', LinkSchema)
module.exports = Link
