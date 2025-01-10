const config = require('../config/config')
const jwtSecret = config.jwt.secret
const jwt = require('jsonwebtoken')

const verifyToken = async function (req, res, next) {
        const token = req.cookies.accessToken
        if(!token) return res.status(403).send({message: 'no tokens found'})
    
            try {
                await jwt.verify(token, jwtSecret, (err, decoded) => {
                    if(err) return res.status(401).send({message: 'unauthorized'})
                    req.userId = decoded.id
                    next()
                })
                req.user = decodedUser
                next()
            } catch (error) {
                res.status(401).json({message: 'invalid token'})
            }
}

module.exports = verifyToken
