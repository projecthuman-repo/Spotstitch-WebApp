const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');


module.exports = async (req, res) => {
    try {

        const { postData } = req.body

        // add validation here

        const post = await Post.createPost(postData)
        if (!post) throw new Error('Could not find post')

        res.status(201).json(post);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}