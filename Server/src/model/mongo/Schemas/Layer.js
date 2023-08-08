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

LayerSchema.statics.getLayer = async (id) => {
    try {
        const layer = await this.findById(id)
        return layer
    } catch (err) {
        throw new Error(err)
    }
}

LayerSchema.statics.getLayers = async () => {
    try {
        const layers = await this.find()
        return layers
    } catch (err) {
        throw new Error(err)
    }
}

LayerSchema.statics.createLayer = () => {

}

LayerSchema.methods.updateLayer = function() {
    
}


const Layer = mongoose.model('Layer', LayerSchema);

module.exports = Layer
