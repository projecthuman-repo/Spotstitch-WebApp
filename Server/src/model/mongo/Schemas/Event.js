const mongoose = require('mongoose');
const { updateFields } = require('./validateFields');

const EventSchema = new mongoose.Schema({
    hostId: { type: String, required: true },
    hostName: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, default: "New event" },
    price: { type: String, default: "0" },
    description: { type: String, default: "My event" },
    createdOn: { type: String },
    date: { type: String, default: Date.now() },
    eventType: { type: String},
    startTime: { type: String},
    endTime: { type: String},
    eventTime: {type: String},
    address: { type: String},
    tags: [String]
})

EventSchema.statics.getEvent = async (eventId) => {
    try {
        const result = await Event.findById(eventId).exec()
        return result
    } catch (err) {
        throw new Error("Error finding events:" + err)
    }
}

EventSchema.statics.getEvents = async (filters = "") => {
    try {
        const result = await Event.find({ tags: { $all: filters } })
        return result
    } catch (err) {
        throw new Error("Error finding events:" + err)
    }
}

EventSchema.statics.createEvent = async (event) => {
    try {
        const evt = new Event(event)
        evt.createdOn = new Date()
        await evt.save()
        return evt
    } catch (err) {
        throw new Error("Error creating event:" + err)
    }
}


EventSchema.methods.updateEvent = async function (event) {
    try {
        updateFields(this, event)
        await this.save()
    } catch (err) {
        console.log(err)
        throw new Error("Error updating event:" + err)
    }
}

EventSchema.methods.deleteEvent = async function () {
    try {
        await this.delete()
    } catch (err) {
        throw new Error("Error deleting event:" + err)
    }
}

EventSchema.statics.deleteAllEvents = async () => {
    try {
        await Event.deleteMany()
    } catch (err) {
        throw new Error(err)
    }
}

EventSchema.statics.deleteAllEventsFromId = async (hostId) => {
    try {
        await Event.deleteMany({ hostId: hostId })
    } catch (err) {
        throw new Error(err)
    }
}

const Event = mongoose.model('Event', EventSchema);

/* short test
const test = async () => {
    const uri = 'mongodb://127.0.0.1:27017/PHC-test'
    mongoose.connect(uri, (err) => {
        console.log('connected');
      });

    const temp = await Event.createEvent({hostId: 0})
    const res = await Event.getEvents()
    console.log("new event created")
    console.log(temp)
    console.log("all events created")
    console.log(res)
    await temp.updateEvent({hostId: 1})
    console.log("event updated")
    console.log(await Event.getEvents())
    await temp.deleteEvent()
    console.log("event deleted")
    console.log(await Event.getEvents())

    await Event.createEvent({hostId: 0})
    await Event.createEvent({hostId: 1})
    await Event.deleteAllEventsFromId(0)
    console.log("all events deleted from user 0")
    console.log(await Event.getEvents())
    await Event.deleteAllEventsFromId(1)
    console.log("all events deleted from user 1")
    console.log(await Event.getEvents())
    
    await Event.deleteAllEvents()
    mongoose.connection.close()
}

test()
*/
module.exports = Event
