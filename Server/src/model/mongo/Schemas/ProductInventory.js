const mongoose = require('mongoose');

const ProductInventorySchema = new mongoose.Schema({ 
    userId: String, 
    products: [String]
})

ProductInventorySchema.statics.getInventory = async (id) => {
    try {
        const inv = await this.find({userId: id})
        return inv
        
    } catch (err) {
        throw new Error(err)
    }
}

ProductInventorySchema.statics.createProductInventory = async (userId) => {
    try {
        const inv = new ProductInventory({userId: userId, products: []})
        await inv.save()
    } catch (err) {
        throw new Error(err)
    }
}

ProductInventorySchema.methods.addProduct = async function(productId) {
    try {
        this.productIds.push(productId)
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}

ProductInventorySchema.methods.removeProduct = async function(productId) {
    try {
        this.products.splice(this.products.indexOf(productId), 1);
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}

const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);

module.exports = ProductInventory
