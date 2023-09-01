const{ Layer } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { layerId } = req.params
        const layer = await Layer.getLayer(layerId)
        if (!layer) throw new Error('No Layer found')

        layer.deleteLayer()

        res.status(201).json(createSuccessResponse(201, 'successfully deleted layer'));
    } catch (e) {
        logger.error({e}, e.message)
        res.status(400).json(e)
        
    }
}