const { Post, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');


module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { postData } = req.body
        postData.userId = userId
        postData.comments = []

        // ensure all fields required to create an event are present
        const missing = validateFields(Post, postData)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // attempt to create new post using post data from client
        const post = await Post.createPost(postData)
        if (!post) throw new Error('Could not create post')

        // return newly created post back to client
        res.status(201).json(createSuccessResponse({ post: post }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, "Error creating post"))

    }
}