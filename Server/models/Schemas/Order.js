const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    sellerID, productID, date, price
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order 
