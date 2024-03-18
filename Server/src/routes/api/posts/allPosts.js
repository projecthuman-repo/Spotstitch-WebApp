const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');


module.exports = async (req, res) => {
    try {
        // get filters for posts from client or set to none
        const { filters } = req.body || ""

        // query for all posts
        const posts = await Post.getPosts(filters)
        if (!posts) throw new Error('Could not find matching posts')

        // send back any matching posts
        res.status(200).json(createSuccessResponse({ posts: posts }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, "Could not fetch posts"))

    }
}