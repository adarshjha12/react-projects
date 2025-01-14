const jwt = require('jsonwebtoken')
const config = require('../config/config')
const jwtSecret = require(config.jwt.secret)

const generateToken = async function (payload, expiresIn = '1h') {
    return jwt.sign(payload, jwtSecret, {expiresIn})
}

module.exports = generateToken