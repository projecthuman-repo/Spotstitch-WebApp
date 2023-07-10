const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({ 
    userID, 
    items: [
        {
            name: String, 
            description: String, 
            rating: String, 
            tags: [String]
        } 
    ]
})

InventorySchema

const Inventory = mongoose.model('Inventory', InventorySchema);



module.exports = Inventory
