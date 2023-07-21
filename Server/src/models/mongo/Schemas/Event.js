const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    host: String, 
    email: String, 
    title: String, 
    price: String, 
    description: String, 
    date: String, 
    eventType: String, 
    startTime: String, 
    endTime: String, 
    eventTime: String, 
    address: String, 
    tags: [String]
})

const Event = mongoose.model('Event', EventSchema);

const getEvents = async () => {
    try {
        const result = await Event.find()
        return result
    } catch (err) {
        throw new Error("Error finding events")
    }   
}

const createEvent = async (event) => {
    try {
        const evt = new Event(event)
        await evt.save()
    } catch (err) {
        throw new Error('Error creating event')
    }
}
const updateEvent = async (eventId, event) => {
    try {
        await Event.findOneAndUpdate(eventId, event)
    } catch (err) {
        throw new Error('Error updating event')
    }
}


module.exports = Event
