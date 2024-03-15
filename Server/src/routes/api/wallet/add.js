const { Wallet } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { card } = req.body

        const wallet = await Wallet.getWallet(userId) || new Wallet(userId);
        if (!wallet) throw new Error('Could not fetch wallet')
        wallet.addCard(card)

        res.status(201).json(wallet.preview());
    } catch (error) {
        logger.error({ error: error.message }, 'Error adding card')
        res.status(400).json(createErrorResponse(400, 'Error adding card'))
    }
}