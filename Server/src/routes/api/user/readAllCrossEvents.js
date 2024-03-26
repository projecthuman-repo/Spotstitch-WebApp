let { CrossPlatformEvent } = require('../../../model');
const logger = require('../../../logger');

module.exports = async (req, res) => {
    try {
        const crossEvents = await CrossPlatformEvent.find();
        if (!crossEvents) throw new Error('No events found')

        res.status(201).json(crossEvents);
    }
    catch (e) {
        logger.error({ error: e.message }, "Could not find events")
        res.status(400).json("Could not find events")
    }
}

