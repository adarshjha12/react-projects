const UploadsModel = require('../models/uploadsModel')

const uploadData = async function (req, res) {
    const {title, content, slug} = req.body

    if(!title || !content || !slug) return res.status(400).json({message: 'missing title, content or slug'})

    try {
        const existingSlug = await UploadsModel.findOne({slug})
        if(existingSlug) return res.status(400).json({message: 'slug already exists'})

        const {file} = req
        const public_id = null
        const url = null

        if (file) {
        public_id = file.filename
        url = file.path
        }

        const newData = new UploadsModel({
            title,
            slug,
            content,
            public_id,
            url
        })

        await newData.save()
        res.status(201).json({message: `post successfull`, data: newData})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = uploadData