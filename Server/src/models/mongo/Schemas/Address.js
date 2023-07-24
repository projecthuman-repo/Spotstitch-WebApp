const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    userId: String,
    addressLines: [String],
    city: String,
    province: String,
    country: String,
    postalCode: String
})

const Address = mongoose.model('Address', AddressSchema);

const getAddresses = async (userId) => {
    try {
        const result = await Address.find({userId: userId})
        return result
    } catch (err) {
        throw new Error("Error finding user")
    }   
}

const createAddress = async (address) => {
    try {
        const addr = new Address(address)
        await addr.save()
    } catch (err) {
        throw new Error('Could not save address')
    }
    
}

const updateAddress = async (addressId, address) => {
    try {
        const result = await Address.findByIdAndUpdate({_id: addressId}, address)
        return result
    } catch (err) {
        throw new Error("Error finding user")
    }  
} 

module.exports = Address
