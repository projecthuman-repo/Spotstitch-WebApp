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

EventSchema.methods

const Event = mongoose.model('Event', EventSchema);

module.exports = Event
