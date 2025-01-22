const PostsModel = require('../models/postsModel')
const { post } = require('../routers/authRoutes')

const updatePost = async function (req, res) {
    const {postId, slug, title, content, status} = req.body

    const featuredImageUrl = null
    if (req.file) {
        featuredImageUrl = req.file.path
    }

   try {
        const updatedData = PostsModel.findByIdAndUpdate(postId, {
            title,
            slug,
            content,
            status,
            ...(featuredImageUrl && {featuredImage: featuredImageUrl})
        },
        {new: true, runValidators: true}
    )
        if (!updatedData) {
            return res.status(404).json({message: 'no posts found'})
        }

        return res.status(200).json({message: 'post update successfull', data: updatedData})

   } catch (error) {
        console.log(error);
        res.status(500),json({
            message: 'error occured while updating the post',
            error: error.message
        })
   }
}

module.exports = updatePost