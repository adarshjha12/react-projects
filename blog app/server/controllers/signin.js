const User = require('../models/schema')

exports.createUser = async function (req, res) {
    const {title, email, password} = req.body
    try {
        const newUser = new User({
            title: title,
            email: email,
            password: password,
        })
        res.send('createUser successful')

        newUser.save()
    } catch (error) {
        console.log(error); 
    }
}
