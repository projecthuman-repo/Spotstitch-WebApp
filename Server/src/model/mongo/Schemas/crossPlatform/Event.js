const mongoose = require('mongoose');
const { crossPlatformDatabase } = require('../../../../connection');
const eventSchema = new mongoose.Schema({
  hostId: {
    type: String,
    required: true,
  },
  hostName: {
    type: String,
    default: 'New Event',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  eventTime: {
    type: String,
  }
});

eventSchema.statics.findById = async function (id) {
  const event = await this.findOne({ eventID: id }); // Use `this` to refer to the model.
  if (!event) {
    console.log('Event not found');
    throw new Error('Event not found');
  } else {
    console.log('Event found:', event);
    return event;
  }
};


const CrossPlatformEvent = crossPlatformDatabase.model('CrossPlatformEvent', eventSchema);
eventSchema.methods.deleteEvent = async function () {
  try {
      await this.delete()
  } catch (err) {
      throw new Error("Error deleting event:" + err)
  }
}


module.exports = CrossPlatformEvent;