const PostsModel = require('../models/postsModel')

const getPreview = async function (req, res) {
    const {imagePath} = req.body

    try {
        const gettingPreview = await PostsModel.findOne({url: imagePath})
        if(!gettingPreview) return res.status(404).json({message: 'cannot get preview image'})

        return res.status(200).json({message: 'got file preview', data: gettingPreview})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'server error occured while deleting your post'})

    }
}

module.exports = getPreview