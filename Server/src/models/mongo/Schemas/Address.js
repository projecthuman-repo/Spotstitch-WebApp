const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    addressLines: [String],
    city: String,
    province: String,
    country: String,
    postalCode: String
})

const Address = mongoose.model('Address', AddressSchema);

AddressSchema.methods.createSpotstitchAddress = async (userInput) => {
    const addr = await Address.create(userInput)
    await addr.save()
}

AddressSchema.methods.updateSpotstitchAddress = (userInput) => {
    this.findById(userInput._id)
        .exec((err, res) => {
            if (err) throw err;
            else console.log(res)
        })
}

AddressSchema.methods.deleteSpotstitchAddress = (addressID) => {
    this.deleteOne({ _id: addressID })
        .exec((err, res) => {
            if (err) throw err;
            else console.log(res)
        })
}

module.exports = Address
