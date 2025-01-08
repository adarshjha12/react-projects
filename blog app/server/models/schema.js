const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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

userSchema.met

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User