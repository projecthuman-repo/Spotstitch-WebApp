const { Layer } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { layerId } = req.params

        // attempt to find the layer
        const layer = await Layer.getLayer(layerId)
        if (!layer) throw new Error('No Layer found')

        layer.deleteLayer()

        res.status(201).json(createSuccessResponse({ message: 'successfully deleted layer' }));
    } catch (e) {
        logger.error({ error: e.message }, "Could not delete layer")
        res.status(400).json(createErrorResponse(400, "Could not delete layer"))
    }
}