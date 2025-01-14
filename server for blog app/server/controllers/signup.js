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
        
        const token = await jwt.sign({id: newUser._id, email: newUser.email},
            jwtSecret, {expiresIn: '1h'}
        )

        console.log('here is the user', newUser);
        
        await res.cookie('accessToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        })
        console.log('message: user created successfully');
        
        res.status(201).send('user created successfully')

    } catch (error) {
        res.status(500).json({message: 'internal server error', err: error})
    }
}
