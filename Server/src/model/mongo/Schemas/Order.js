const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    sellerId: String, 
    buyerId: String, 
    productId: String, 
    date: String, 
    price: String,
    status: String
})

OrderSchema.statics.getOrder = async (orderId) => {
    try {
        return await Order.findById(orderId)
    } catch (err) {
        throw new Error(err)
    }
}

OrderSchema.statics.createOrder = async (order) => {
    try {
        const ord = new Order(order)
        await ord.save()
    } catch (err) {
        throw new Error(err)
    }
}

OrderSchema.methods.refundOrder = () => {

}

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order 
