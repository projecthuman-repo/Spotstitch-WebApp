let {Event} = require('../../../model');
const logger = require('../../../logger');

module.exports = async (req, res) => {
    try {
        const events = await Event.find();
        if (!events) throw new Error('No events found')

        res.status(200).json(events);
    }
    catch (e) {
        logger.error({ error: e.message }, "Could not find events")
        res.status(400).json("Could not find events")
    }
}