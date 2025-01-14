const config = require('../config/config');
const jwtSecret = config.jwt.secret;
const jwt = require('jsonwebtoken');

const verifyToken = async function (req, res, next) {
    try {
        console.log('Cookies:', req.cookies);

        // Ensure the cookie key matches the name used when setting the cookie
        const token = req.cookies['accessToken']; // Use the correct key name
        console.log('Token:', token);

        if (!token) {
            console.log('Access token not found');
            return res.status(403).send({ message: 'No tokens found' });
        }

        // Verify the JWT
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                console.error('JWT verification error:', err.message);
                return res.status(401).send({ message: 'Unauthorized' });
            }

            // Attach the user ID from the token to the request object
            req.userId = decoded.id;
            
            next(); // Proceed to the next middleware or route handler
        });
    } catch (error) {
        console.error('Error verifying token:', error.message);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = verifyToken;
