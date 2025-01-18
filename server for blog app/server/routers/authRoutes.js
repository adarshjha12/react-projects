const express = require('express')
const router = express.Router()
const signup = require('../controllers/signup')
const login = require('../controllers/login')
const currentUser = require('../controllers/currentUser')
const auth = require('../middlewares/auth')

router.post('/user/signup', signup.createUser )
router.post('/user/login', login.loginUser )

router.get('/currentUser', auth, currentUser.currentUser)



module.exports = router