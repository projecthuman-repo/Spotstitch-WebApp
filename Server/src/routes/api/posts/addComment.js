const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');


module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { postId } = req.params
        const { comment } = req.body

        // attempt to find existing post
        const post = await Post.getPost(postId)
        if (!post) throw new Error('Could not find post')

        post.addComment(userId, comment)

        // return updated post with the new comment
        res.status(201).json(createSuccessResponse({ comment: post }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, "Could not add comment"))

    }
}