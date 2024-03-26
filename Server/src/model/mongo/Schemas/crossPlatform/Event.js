const mongoose = require('mongoose');
const { crossPlatformDatabase } = require('../../../../connection');

const eventSchema = new mongoose.Schema({
  eventID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
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
  const event = await CrossPlatformUser.findOne({ eventID: id });
  if (!event) throw new Error('invalid email, cross platform user does not exist');
  else{
    console.log('Event found');
  }
};

// EventSchema.statics.createNewEvent = async function () {
//   const user = new User()
//   const settings = await Settings.createSettings(user._id)
//   const wallet = await Wallet.create(user._id)

//   user.settings = settings._id
//   user.wallet = wallet._id
// }

const CrossPlatformEvent = crossPlatformDatabase.model('CrossPlatformEvent', eventSchema);

module.exports = CrossPlatformEvent;