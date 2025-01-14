const User = require('../models/schema')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const jwtSecret = config.jwt.secret
const bcrypt = require('bcryptjs')

exports.loginUser = async function (req, res) {
    const {email, password} = req.body

    try {
        const findUser = await User.findOne({email})
        if (!findUser) return res.status(404).json({message: 'user not found'})

        const verifyUser = await bcrypt.compare(password, findUser.password)
        if (!verifyUser) return res.status(400).json({message: 'invalid credentials'})

        const token = jwt.sign({id: findUser._id, email: findUser.email }, jwtSecret,
            {expiresIn: '1h'}
        )
        res.cookie('accessToken', token,
            {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
            }
        )
        res.status(200).json({message: 'login successful'})

    } catch (error) {
        res.status(500).json({message: 'internal server error'})
    }
}