const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value)
            },
            message: (props) => `$(props.value) is not valid email`
        }
    },
    password:{
        type: String,
        required: true
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User