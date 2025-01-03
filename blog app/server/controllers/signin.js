const User = require('../models/schema')

exports.createUser = async function (req, res) {
    try {
        const newUser = new User({
            title: req.body.title,
            email: req.body.email,
            password: req.body.password,
        })

        newUser.save()
    } catch (error) {
        console.log(error);
        
    }
}