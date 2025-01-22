const PostsModel = require('../models/postsModel')

const getPost = async function (req, res) {
    const {id} = req.body

    try {
        const yourPost = await PostsModel.findById(id)
        if(!yourPost) return res.status(404).json({message: 'no post found'})

        return res.status(200).json({message: 'here is your post', data: yourPost})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'error occured in server'})
        
    }
}

module.exports = getPost