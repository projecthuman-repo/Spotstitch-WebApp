const Address = require('./Address')
const Chat = require('./Chat')
const Event = require('./Event')
const Layer = require('./Layer')
const Order = require('./Order')
const Post = require('./Post')
const Product = require('./Product')
const Wallet = require('./Wallet')
const ProductInventory = require('./ProductInventory')
const GameInventory = require('./GameInventory')
const User = require('./User')
const mongoose = require("mongoose")

module.exports = {
    Address,
    Chat, 
    Event,
    Layer,
    Order,
    Post,
    Product,
    Wallet,
    ProductInventory,
    GameInventory,
    User
}
if (process.env.MONGO_URI && process.NODE_ENV === 'production') {
   mongoose
      .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, })
      .then(() => console.log("Connected to MongoDB"))
      .catch(err => console.log(err));
} else if (process.env.LOCAL_URI && process.NODE_ENV !== 'production') {
   mongoose
      .connect(process.env.LOCAL_URI, { useNewUrlParser: true, useUnifiedTopology: true, })
      .then(() => console.log("Connected to local database"))
      .catch(err => console.log(err));
} else {
   throw new Error('');
}
