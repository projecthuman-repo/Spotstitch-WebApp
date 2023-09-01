const{ Layer } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const layers = await Layer.getLayers()
        if (!layers) throw new Error('No layers found')

        
        res.status(201).json(layers);
    } catch (e) {
        logger.error({e}, e.message)
        res.status(400).json(e)
        
    }
}