const PostsModel = require('../models/postsModel')

const deletePost = async function (req, res) {
    const {id} = req.body

    try {
        const deletingPost = await PostsModel.findByIdAndDelete(id)
        if(!deletingPost) return res.status(404).json({message: 'deletePost failed'})

        return res.status(200).json({message: 'post deleted successfully'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'server error occured while deleting your post'})

    }
}

module.exports = deletePost