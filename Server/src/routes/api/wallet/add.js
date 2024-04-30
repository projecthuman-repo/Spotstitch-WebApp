const { Wallet } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

// Add a card to the users wallet
module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { card } = req.body
        if (!card) throw new Error('Card not found in request')

        // verify that there is an existing wallet for the user
        const wallet = await Wallet.getWallet(userId)
        if (!wallet) throw new Error('Could not fetch wallet')
        
        // make sure attempt to add card succeeded 
        const attempt = await wallet.addCard(card)
        if (!attempt) throw new Error('Adding card failed')
        
        res.status(201).json(createSuccessResponse({ wallet: wallet.preview() }));
    } catch (error) {
        logger.error({ error: error.message }, 'Error getting wallet')
        res.status(400).json(createErrorResponse(400, 'Error getting wallet'))
    }
}