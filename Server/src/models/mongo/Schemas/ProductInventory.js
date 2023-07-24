const mongoose = require('mongoose');

const ProductInventorySchema = new mongoose.Schema({ 
    userID: String, 
    productIds: [String]
})

const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);

module.exports = ProductInventory
