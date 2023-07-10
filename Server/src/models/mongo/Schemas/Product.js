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

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
