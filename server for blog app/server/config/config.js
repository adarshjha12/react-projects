require('dotenv').config()

const config = {
    server: {
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'development'
    },

    database: {
        uri: process.env.DEV_MONGO_URI
    },

    jwt:{
        secret: process.env.JWT_SECRET,
        expiration: '1h'
    },

    cloudinary: {
        cloudName: process.env.CLOUDINARY_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET
    }
}

module.exports = config