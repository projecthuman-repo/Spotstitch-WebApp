const{ Layer } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { layerInfo } = req.body
        const layer = Layer.createLayer(layerInfo)
        if (!layer) throw new Error('No Layer found')

        
        res.status(201).json(layer);
    } catch (e) {
        logger.error({e}, e.message)
        res.status(400).json(e)
        
    }
}