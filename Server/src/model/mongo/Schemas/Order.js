const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    sellerID: String, 
    productID: String, 
    date: String, 
    price: String
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order 
