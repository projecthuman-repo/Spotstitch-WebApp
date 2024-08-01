const { Post, User, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');


module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')
        

        const postData = req.body
        postData.userId = userId.toString()
        postData.userDescription = ""
        postData.image = {}
        postData.tags = []
        postData.comments = []
        postData.likes = 0
        
        console.log("POSTDATA AFTER: ", postData)
        console.log("POST TEMPLATE: ", Post)
        
        // good so far


        // console.log("Comments: ", postData.comments)

        // ensure all fields required to create an event are present
        const missing = validateFields(Post, postData)
        console.log("HERE=================")
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // attempt to create new post using post data from client
        const post = await Post.createPost(postData)
        if (!post) throw new Error('Could not create post')

        
        // // Adds post to user's database
        // // check if user exists, otherwise throw an error
        // const user = await User.findById(userId)
        // // logger.info({ id: userId }, "searching for user")
        // if (!user) throw new Error("User does not exist")

        // user = await user.updatePosts(postData)

        // return newly created post back to client
        res.status(201).json(createSuccessResponse({ postData }));
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(createErrorResponse(400, "Error creating post"))

    }
}