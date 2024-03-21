const { Post, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

/**
 * Update an existing post with new data.
 * Specific posts are found with their id in the links params
 */
module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { postId } = req.params
        const { postData } = req.body
        postData.userId = userId

        // ensure all fields required to create the model are present
        const missing = validateFields(Post, postData)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        const post = await Post.getPost(postId)
        if (!post) throw new Error('Could not find post')

        // make sure the user owns the post
        if (post.userId != userId) throw new Error("User does not own this post")
        postData.comments = post.comments
    
        post.updatePost(postData)

        res.status(201).json(createSuccessResponse({ post: post }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, 'Error updating post'))

    }
}