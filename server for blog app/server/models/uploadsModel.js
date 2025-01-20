const mongoose = require('mongoose')

const uploadsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },

    public_id: {
        type: String,
        required: true
    },

    url:{
        type: String,
        required: true
    }
})

const UploadsModel = mongoose.model('uploads', uploadsSchema)

module.exports = UploadsModel
