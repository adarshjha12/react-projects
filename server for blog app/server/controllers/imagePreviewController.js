const PostsModel = require('../models/postsModel');

const getPreview = async function (req, res) {
    const { imagePath } = req.body;

    if (!imagePath) {
        return res.status(400).json({ message: 'Image path is required' });
    }

    try {
        const previewData = await PostsModel.findOne({ url: imagePath });

        if (!previewData) {
            return res.status(404).json({ message: 'Cannot get preview image' });
        }

        return res.status(200).json({ message: 'Got file preview', data: previewData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error occurred while retrieving the preview image' });
    }
};

module.exports = getPreview;
