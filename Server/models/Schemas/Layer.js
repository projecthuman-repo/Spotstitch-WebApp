const mongoose = require('mongoose');

const LayerSchema = new mongoose.Schema({
    layerName: String,
    profileImage: {
        data: Buffer,
        contentType: String
    },
    banner: {
        data: Buffer,
        contentType: String
    },
    visibility: Boolean,
    category: String,
    description: String,
    rules: String
})

const Layer = mongoose.model('Layer', LayerSchema);

module.exports = Layer
