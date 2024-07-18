const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json(createErrorResponse(401, 'Token missing'));
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) {
                return res.status(403).json(createErrorResponse(403, 'Invalid token'));
            }

            req.user = user;
            const filters = req.body.filters || {};
            const posts = await Post.getPosts(filters);

            if (!posts || posts.length === 0) {
                throw new Error('No posts found');
            }

            res.status(200).json(createSuccessResponse({ posts }));
        });
    } catch (error) {
        logger.error({ error }, 'Error fetching posts');
        res.status(400).json(createErrorResponse(400, 'Could not fetch posts'));
    }
};