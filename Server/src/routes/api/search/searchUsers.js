const express = require('express');
const router = express.Router();
const User = require('../../../model/mongo/Schemas/User');
const logger = require('../../../logger');

const searchUsers = async (req, res) => {
    console.log('searchUsers endpoint reached');
    const { query } = req.query; // Corrected
    logger.info('searchUsers endpoint reached with query:', query);
    
    try {
        
        const users = await User.find({
            $or: [
                { username: new RegExp(query, 'i') },
                { firstName: new RegExp(query, 'i') },
                { lastName: new RegExp(query, 'i') }
            ]
        }).select('username firstName lastName');
        console.log('user')
        console.log()
        console.log('Users found:', users);
        res.json(users);

    } catch (error) {
        logger.error('Error searching users:', error);
        res.status(500).json({ error: 'Internal server error' }); // Generic error response

            
    }
};
module.exports = searchUsers;
