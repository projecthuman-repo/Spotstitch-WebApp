const mongoose = require('mongoose');
const { updateFields } = require('./index')
const AddressSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        select: false
    },
    name: String,
    addressLines: [String],
    city: String,
    province: String,
    country: String,
    postalCode: String
})

AddressSchema.statics.getAddress = async (addressId) => {
    try {
        const result = await Address.findById(addressId)
        return result
    } catch (err) {
        throw new Error("Error finding user")
    }
}

AddressSchema.statics.getUserAddresses = async (userId) => {
    try {
        const result = await Address.find({ userId: userId })
        return result
    } catch (err) {
        throw new Error("Error finding user")
    }
}

AddressSchema.statics.createAddress = async (address) => {
    try {
        const result = new Address(address)
        await result.save()
        return result
    } catch (err) {

        throw new Error(`Could not save address: ${err}`)
    }

}

AddressSchema.statics.updateAddress = async function (addressId, address) {
    try {
        const result = await Address.find(addressId)
        updateFields(result, address)
        await result.save()
        return result
    } catch (err) {
        throw new Error("Error finding Address")
    }
}

AddressSchema.statics.deleteAddress = async function (addressId) {
    try {
        await Address.findByIdAndDelete(addressId)
    } catch (err) {
        throw new Error("Error finding user")
    }
}

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address
