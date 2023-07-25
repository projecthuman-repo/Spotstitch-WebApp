const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    sellerID: String,
    seller: String,
    productName: String,
    description: String,
    rating: String,
    reviews: String,
    features: String,
    type: String,
    tags: [String],
    quantity: Number
})

ProductSchema.statics.getProducts = () => {
    try {
        
    } catch (error) {
        throw new Error(error)
    }
}

ProductSchema.statics.getProduct = () => {
    try {
        
    } catch (error) {
        throw new Error(error)
    }
}

ProductSchema.statics.createProduct = () => {
    try {
        
    } catch (error) {
        throw new Error(error)
    }
}

ProductSchema.methods.sellProduct = (qty) => {
    try {
        if (this.quantity - qty > 0) {
            this.quantity -= qty
        }
        this.save() 
    } catch (error) {
        throw new Error(error)
    }
}

ProductSchema.methods.deleteProduct = async () => {
    try {
        await this.delete().exec()
    } catch (error) {
        throw new Error(error)
    }
}

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
