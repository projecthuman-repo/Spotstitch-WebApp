const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

/** 
 * Fetch a specific post with its unique id
 */
module.exports = async (req, res) => {
    try {
        // Extract the username from the request parameters
        const { username } = req.params;

        // Use the static method to find the post by username
        const posts = await Post.getPostUsername(username);

        if (!posts || posts.length === 0) throw new Error('Could not find posts');

        // Send back the post if found to the client
        res.status(200).json(createSuccessResponse({ posts }));
    } catch (e) {
        logger.error({ e }, e.message);
        res.status(400).json(createErrorResponse(400, "Could not find posts"));
    }
}
