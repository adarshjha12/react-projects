const express = require('express')
const router = express.Router()
const signup = require('../controllers/signup')
const login = require('../controllers/login')
const currentUser = require('../controllers/currentUser')
const auth = require('../middlewares/auth')

router.post('/user/signup', signup.createUser )
router.post('/user/login', login.loginUser )

router.get('/currentUser', auth, currentUser.currentUser)

// router.get('/set-cookie', (req, res) => {
//     res.cookie('accessToken', 'sample-token-value', {
//         httpOnly: true, // Prevents client-side access
//         secure: false,  // Set to true if using HTTPS
//         sameSite: 'none', // Use 'none' for cross-origin
//     });
//     res.send('Cookie has been set!');
// });


module.exports = router