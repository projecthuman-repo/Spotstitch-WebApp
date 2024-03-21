const { Wallet } = require('../../../model');
const logger = require('../../../logger')

/**
 * Remove a card from the users wallet
 * 
 */
module.exports = async (req, res) => {
    try {
        // make sure the user is authenticated and we can find their ID
        const userId = res?.locals?.jwtData?.id
        if (!userId) throw new Error('Invalid user ID')

        const { index } = req.params

        // verify that there is an existing wallet for the user
        const wallet = await Wallet.getWallet(userId);
        if (!wallet) throw new Error("Wallet does not exist")

        wallet.removeCard(index)

        res.status(201).json(wallet.preview());
    } catch (e) {
        logger.error({ e }, 'Error removing card')
        res.status(400).json('Error removing card')
    }
}