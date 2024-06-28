
const logger = require('../../../logger');
const { User } = require('../../../model');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        console.log("Update username Code in api/user");
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id;

        if (!userId) throw new Error('Invalid user ID')

        // check for username in request body
        const username = req.body.username
        if (!username) throw new Error("No username found in request")

        // check if user exists, otherwise throw an error
        const user = await User.findById(userId)
        logger.info({ id: userId }, "searching for user")
        if (!user) throw new Error("User does not exist")
        console.log(user);
        // update user username
        const data = await user.updateUsername(username)

        // return updated username back to user
        res.status(200).json(createSuccessResponse({ username: data }));
    } catch (error) {
        logger.error({ error: error.message }, 'Error updating user username')
        res.status(400).json(createErrorResponse(400, 'Error updating user username'))
    }
}