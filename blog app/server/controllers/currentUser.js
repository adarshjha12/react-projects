const User = require('../models/schema')
exports.currentUser = async function (req, res) {
    try {
        const id = req.userId
        const getUser = await User.findById(id)
        if (!getUser) return res.status(404).json({message: 'user not found'})
            
        const {password, ...safeUserData} = getUser.toObject()
        res.status(200).json(safeUserData);


    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the user' });
    }
}

