
const logger = require('../../../logger');
const { User } = require('../../../model');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {

        console.log("Update lastName Code in api/user");
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id;

        if (!userId) throw new Error('Invalid user ID')

        // check for lastName in request body
        const lastName = req.body.lastName
        if (!lastName) throw new Error("No last name found in request")

        // check if user exists, otherwise throw an error
        const user = await User.findById(userId)
        logger.info({ id: userId }, "searching for user")
        if (!user) throw new Error("User does not exist")
        console.log(user);
        // update user lastName
        const data = await user.updateLastName(lastName)

        // return updated lastName back to user
        res.status(200).json(createSuccessResponse({ lastName: data }));
    } catch (error) {
        logger.error({ error: error.message }, 'Error updating user last name')
        res.status(400).json(createErrorResponse(400, 'Error updating user last name'))
    }
}