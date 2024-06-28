
const logger = require('../../../logger');
const { User } = require('../../../model');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        console.log("Update following Code in api/user");
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id;

        if (!userId) throw new Error('Invalid user ID')

        // check for username of the following account in request body
        const following = req.body.following
        if (!following) throw new Error("No following name found in request")

        // check if user exists, otherwise throw an error
        const user = await User.findById(userId)
        logger.info({ id: userId }, "searching for user")
        if (!user) throw new Error("User does not exist")
        console.log(user);
        // update user firstName
        const data = await user.updateFollowing(following)


        // Updating the followed user's following list to include user
        const followed = await User.findOne({username: following})
        const followedId = followed._id

        const dataTwo = await User.updateFollowers(followedId)

        // return updated firstName back to user
        res.status(200).json(createSuccessResponse({ following: data, followers: dataTwo }));
    } catch (error) {
        logger.error({ error: error.message }, 'Error updating user first name')
        res.status(400).json(createErrorResponse(400, 'Error updating user first name'))
    }
}