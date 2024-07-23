const { Post, User } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

/** 
 * Fetch a specific post with its unique id
*/
module.exports = async (req, res) => {
    try {

        // look for existing post based on unique id
        const posts = await Post.find({ username: req.body.username })
        if (!posts) throw new Error('Could not find posts')

        // send back post if found to client
        res.status(200).json(createSuccessResponse({ posts}));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, "Could not find posts"))

    }
}