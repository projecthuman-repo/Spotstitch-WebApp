const { Layer, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { layerInfo } = req.body

        // ensure all fields required to create the model are present
        const missing = validateFields(Layer, layerInfo)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // make sure layer is correctly created
        const layer = Layer.createLayer(layerInfo)
        if (!layer) throw new Error('No Layer found')

        res.status(201).json(createSuccessResponse({ layer: layer }));
    } catch (e) {
        logger.error({ error: e.message }, "Could not create layer")
        res.status(400).json(createErrorResponse(400, "Could not create layer"))
    }
}