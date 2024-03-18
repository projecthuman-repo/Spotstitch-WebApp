const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { postId } = req.params

        // attempt for find existing post
        const post = await Post.getPost(postId)
        if (!post) throw new Error('Could not find post')

        // make sure the user owns the post
        if (post.userId != userId) throw new Error("User does not own this post")
        post.deletePost()

        res.status(200).json(createSuccessResponse({ post: post }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, "Could not delete post"))

    }
}