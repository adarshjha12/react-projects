const mongoose = require('mongoose')

const postsSchema = mongoose.Schema({
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

const PostsModel = mongoose.model('post_uploads', postsSchema)

module.exports = PostsModel
