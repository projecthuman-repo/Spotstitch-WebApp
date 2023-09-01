const{ Wallet } = require('../../../model');
const logger = require('../../../logger')

/**
 * Remove a card from user wallet
 * @param {*} req 
 * @param {*} res 
 * 
 */
module.exports = async (req, res) => {
    try {
        const { id, cardIndex } = req.body
        
        const wallet = await Wallet.getWallet(id);
        
        if (!wallet) throw new Error("Wallet does not exist")

        wallet.removeCard(cardIndex)

        res.status(201).json(wallet.preview());
    } catch (e) {
        logger.error({e}, 'Error adding card')
        res.status(400).json('Error adding card')
    }
}