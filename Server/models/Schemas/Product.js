const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    sellerID, 
    seller, 
    productName, 
    description,
    rating, 
    reviews, 
    features, 
    type, 
    tags: []
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
