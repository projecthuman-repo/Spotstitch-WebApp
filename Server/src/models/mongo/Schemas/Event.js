const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
    hostId: String, 
    hostName: String,
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

EventSchema.statics.getEvents = async () => {
    try {
        const result = await Event.find().exec()
        return result
    } catch (err) {
        throw new Error("Error finding events")
    }   
}

EventSchema.statics.createEvent = async (event) => {
    try {
        const evt = new Event(event)
        await evt.save()
        return evt
    } catch (err) {
        throw new Error('Error creating event')
    }
}

EventSchema.methods.updateEvent = async (eventId, event) => {
    try {
        await Event.findByIdAndUpdate(eventId, event).exec()
    } catch (err) {
        throw new Error('Error updating event')
    }
}


const Event = mongoose.model('Event', EventSchema);

/* short test
const test = async () => {
    const uri = 'mongodb://127.0.0.1:27017/PHC-test'
    mongoose.connect(uri, (err) => {
        console.log('connected');
      });
    const ev = new Event()
    ev.updateEvent()
    const temp = await Event.createEvent({})
    const res = await Event.getEvents()
    console.log(temp)
    console.log(res)
    mongoose.connection.close()
}

test()
*/
module.exports = Event
