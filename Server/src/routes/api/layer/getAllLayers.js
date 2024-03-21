const { Layer } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        // attempt to find all layers
        const layers = await Layer.getLayers()
        if (!layers) throw new Error('No layers found')

        res.status(201).json(createSuccessResponse({ layer: layers }));
    } catch (e) {
        logger.error({ error: e.message }, "Could not find layer")
        res.status(400).json(createErrorResponse(400, "Could not find layer"))
    }
}