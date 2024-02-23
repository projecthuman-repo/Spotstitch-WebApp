const{ Wallet } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { id, card } = req.body
        
        const wallet = await Wallet.getWallet(id) || new Wallet(id);  

        wallet.addCard(card)

        res.status(201).json(wallet.preview());
    } catch (e) {
        logger.error({e}, 'Error adding card')
        res.status(400).json(createErrorResponse(400, 'Error adding card'))
    }
}