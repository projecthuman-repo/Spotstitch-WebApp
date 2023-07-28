const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    userId: String,
    addressLines: [String],
    city: String,
    province: String,
    country: String,
    postalCode: String
})

AddressSchema.statics.getAddresses = async (userId) => {
    try {
        const result = await Address.find({userId: userId})
        return result
    } catch (err) {
        throw new Error("Error finding user")
    }   
}

AddressSchema.statics.createAddress = async (address) => {
    try {
        const addr = new Address(address)
        await addr.save()
    } catch (err) {
        throw new Error('Could not save address')
    }
    
}

AddressSchema.statics.updateAddress = async (addressId, address) => {
    try {
        const result = await Address.findByIdAndUpdate(addressId, address)
        return result
    } catch (err) {
        throw new Error("Error finding user")
    }  
} 

AddressSchema.methods.removeAddress = async function() {
    try {
        await this.delete()
    } catch (err) {
        throw new Error("Error finding user")
    }  
    
}

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address
