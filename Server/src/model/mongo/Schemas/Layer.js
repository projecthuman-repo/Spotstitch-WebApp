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

LayerSchema.statics.createLayer = async (content) => {
    try {
        const layer = new Layer(content)
        await layer.save()
        return layer
    } catch (err) {
        throw new Error(err)
    }
}

LayerSchema.methods.updateLayer = async function(id, content) {
    try {
        await this.update(content)
        return this
    } catch (err) {
        throw new Error(err)
    }
}


const Layer = mongoose.model('Layer', LayerSchema);

module.exports = Layer
