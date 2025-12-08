const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    websiteName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('formSchema', formSchema);