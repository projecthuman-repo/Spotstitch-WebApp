const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

/** 
 * Fetch a specific post with its unique id
*/
module.exports = async (req, res) => {
    try {
        const { postId } = req.params

        // look for existing post based on unique id
        const post = await Post.getPost(postId)
        if (!post) throw new Error('Could not find post')

        // send back post if found to client
        res.status(200).json(createSuccessResponse({ post: post }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, "Could not find post"))

    }
}