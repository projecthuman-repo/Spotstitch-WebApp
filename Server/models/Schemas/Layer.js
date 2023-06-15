const mongoose = require('mongoose');

const LayerSchema = new mongoose.Schema({
    layerName, 
    profileImage, 
    banner, 
    visibility: Boolean, 
    category, 
    description, 
    rules
})

const Layer = mongoose.model('Layer', LayerSchema);

module.exports = Layer
