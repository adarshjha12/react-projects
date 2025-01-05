const express = require('express')
const router = express.Router()
const signin = require('../controllers/signin')

router.post('/user', signin.createUser )

module.exports = router