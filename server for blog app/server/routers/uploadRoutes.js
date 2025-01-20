const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary')
const {createCloudinaryStorage} = require('multer-storage-cloudinary')
const uploadData = require('../controllers/uploadsController')


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new createCloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

const upload = multer({ storage });
router.post('/', upload.single('image'), uploadData);

module.exports = router