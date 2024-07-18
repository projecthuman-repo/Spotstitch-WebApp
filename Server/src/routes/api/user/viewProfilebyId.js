
const logger = require('../../../logger');
const { User } = require('../../../model');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const getUserId = res?.locals?.jwtData?.userId
        if (!getUserId) throw new Error('Invalid searched user Id')

        // check if user exists, otherwise throw an error
        const user = await User.findById(getUserId)
        if (!user) throw new Error("User does not exist")

        const data = await user.getUserData()

        // return profile back to user
        res.status(200).json(createSuccessResponse({ user: data }));
    } catch (error) {
        logger.error({ error: error.message }, 'Error getting user profile')
        res.status(400).json(createErrorResponse(400, 'Error getting user profile'))
    }
}