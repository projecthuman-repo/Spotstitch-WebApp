const { GameInventory } = require('../../../../model');
const logger = require('../../../../logger');
const { createErrorResponse } = require('../../../../response');


module.exports = async (req, res) => {
    try {

        const { userId } = req.params

        const inv = GameInventory.createGameInventory(userId)
        if (!inv) throw new Error('Could not find inventory')

        res.status(201).json(inv);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}