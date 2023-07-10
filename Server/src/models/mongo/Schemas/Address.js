const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    addressLines: [String], 
    city: String, 
    province: String, 
    postalCode: String
})

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address
