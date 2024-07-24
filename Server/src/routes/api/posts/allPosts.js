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
            const posts = await Post.getAllPosts();

            if (!posts || posts.length === 0) {
                throw new Error('No posts found');
            }



            // We don't store the username and picture with the post because
            //  the User may change their username or picture
            // Gets username and pictures for each post
            const userIds = posts.map(post => post.userId);

            // Fetch user details for each userId
            const users = await User.find({ _id: { $in: userIds } }, 'username picture'); // Select only username and picture fields
            const userMap = {};
            users.forEach(user => {
                userMap[user._id] = {
                    username: user.username,
                    avatar: user.avatar,
                };
            });

            // Attach user details to posts
            const postsWithUserDetails = posts.map(post => ({
                ...post.toObject(),
                userDetails: userMap[post.userId],
            }));

            res.status(200).json(createSuccessResponse({ posts: postsWithUserDetails }));
        });
    } catch (error) {
        logger.error({ error }, 'Error fetching posts');
        res.status(400).json(createErrorResponse(400, 'Could not fetch posts'));
    }
};