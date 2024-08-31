const { GameInventory } = require('../../../../model');
const logger = require('../../../../logger');
//const { createErrorResponse } = require('../../../../response');


module.exports = async (req, res) => {
    try {

        const { userId, gameId } = req.params

        const inv = GameInventory.getGameInventory(userId)
        if (!inv) throw new Error('Could not find inventory')

        inv.addGame(gameId)

        res.status(201).json(inv);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}