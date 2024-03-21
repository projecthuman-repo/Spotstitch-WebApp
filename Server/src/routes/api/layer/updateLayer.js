const{ Layer, validateFields } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse, createSuccessResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { layerId } = req.params
        const { layerInfo } = req.body

        // ensure all fields required to create the model are present
        const missing = validateFields(Layer, layerInfo)
        if (missing) throw new Error(`Missing required fields: ${missing.toString()}`)

        // attempt to find the layer
        const layer = await Layer.getLayer(layerId)
        if (!layer) throw new Error('could not find layer')
        
        res.status(201).json(createSuccessResponse({layer: layer}));
    } catch (e) {
        logger.error({ error: e.message }, "Could not update layer")
        res.status(400).json(createErrorResponse(400, "Could not update layer"))    
    }
}