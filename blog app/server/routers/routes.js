const express = require('express')
const router = express.Router()
const signin = require('../controllers/signin')
const login = require('../controllers/login')

router.post('/user/signin', signin.createUser )
router.post('/user/login', login.loginUser )

module.exports = router