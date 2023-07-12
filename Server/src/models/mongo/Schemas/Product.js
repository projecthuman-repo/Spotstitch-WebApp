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
    tags: [String]
})



ProductSchema.statics.getProducts = () => {
    return this.find({})
}

ProductSchema.methods.getProductbyID = (productID) => {
    return this.findOne({ _id: productID })
}
ProductSchema.statics.findProductByFilters = (filters = {}) => {
    return this.find({ filters })
}
ProductSchema.methods.createSpotstitchProduct = (product) => {
    const prod = new Product(product)
    prod.save()
        .then()
        .catch()
    return prod
}
ProductSchema.methods.updateSpotstitchProduct = (productID, product) => {
    this.findOneAndUpdate({ _id: productID }, product)
}

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
