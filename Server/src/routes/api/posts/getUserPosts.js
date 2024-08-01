const { Post, User } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

/** 
 * Fetch a specific post with its unique id
 */
module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const { username } = req.params

        // Use the static method to find the post by username
        const user = await User.findOne({username: username})
        const posts = await Post.getPostUsername(user._id);

        if (!posts || posts.length === 0) throw new Error('Could not find posts');

        // Send back the post if found to the client
        res.status(200).json(createSuccessResponse({ posts }));
    } catch (e) {
        logger.error({ e }, e.message);
        res.status(400).json(createErrorResponse(400, "Could not find posts"));
    }
}
