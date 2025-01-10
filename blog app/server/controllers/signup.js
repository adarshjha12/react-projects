const User = require('../models/schema')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const jwtSecret = config.jwt.secret

exports.createUser = async function (req, res) {
    const {title, email, password} = req.body

    try {
        const existingUser = await User.findOne({email})
        if (existingUser) return res.status(400).json({message: 'user already exists'})
            
        const newUser = await new User({
            title: title,
            email: email,
            password: password,
        })
        await newUser.save()
        
        const token = await jwt.sign({userId: newUser._id, email: newUser.email},
            jwtSecret, {expiresIn: '1h'}
        )

        console.log('token:', token);
        
        await res.cookie('accessToken', token, {
            httpOnly: true,
            sameSite: 'None',
            maxAge: 60*60*1000,
        })
        console.log('message: user created successfully');
        
        res.status(201).json({message: 'user created successfully'})

    } catch (error) {
        res.status(500).json({message: 'internal server error', err: error})
    }
}
