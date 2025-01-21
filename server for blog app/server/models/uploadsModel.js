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

    status:{
        type: String
    },

    userId:{
        type: String
    },

    public_id: {
        type: String
    },

    url:{
        type: String
    },
},
{timestamps: true}
)

const UploadsModel = mongoose.model('post_uploads', uploadsSchema)

module.exports = UploadsModel
