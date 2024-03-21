const mongoose = require('mongoose');
const { updateFields } = require('./validateFields');

const ProductSchema = new mongoose.Schema({
    sellerId: String,
    seller: String,
    productName: String,
    description: String,
    rating: Number,
    reviews: [{
        by: String,
        content: String,
        rating: Number
    }],
    features: String,
    type: String,
    tags: [String],
    quantity: Number
})

ProductSchema.statics.getProducts = async () => {
    try {
        return await Product.find()
    } catch (error) {
        throw new Error(error)
    }
}

ProductSchema.statics.getProduct = async (productId) => {
    try {
        return await Product.findById(productId)
    } catch (error) {
        throw new Error(error)
    }
}

ProductSchema.statics.createProduct = async (productDetails) => {
    try {
        const prod = new Product(productDetails)
        await prod.save()
    } catch (error) {
        throw new Error(error)
    }
}

ProductSchema.methods.updateProduct = async function (product) {
    try {
        updateFields(this, product)
        await this.save()
        return this
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
        const item = this
        await this.delete().exec()
        return item
    } catch (error) {
        throw new Error(error)
    }
}

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
