
const logger = require('../../../logger');
const { User } = require('../../../model');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        // check for type in request body
        const accountType = req.body.accountType
        if (!accountType) throw new Error("No image found in request")

        // check if user exists, otherwise throw an error
        const user = await User.findById(userId)
        if (!user) throw new Error("User does not exist")

        // update user type
        const data = await user.updateAccountType(accountType)

        // return updated image back to user
        res.status(200).json(createSuccessResponse({ accountType: data }));
    } catch (error) {
        logger.error({ error: error.message }, 'Error updating account type')
        res.status(400).json(createErrorResponse(400, 'Error updating account type'))
    }
}