const Address = require('./Address');
const Chat = require('./Chat');
const Message = require('./Message')
const Notification = require('./Notifcation');
const Event = require('./Event');
const Layer = require('./Layer');
const Order = require('./Order');
const Post = require('./Post');
const Product = require('./Product');
const Wallet = require('./Wallet');
const ProductInventory = require('./ProductInventory');
const GameInventory = require('./GameInventory');
const User = require('./User');
const CrossPlatformUser = require('./crossPlatform/User');
const Settings = require('./Settings')
const { validateFields, updateFields } = require('./validateFields');

module.exports = {
  Address,
  Chat,
  Message,
  Notification,
  Event,
  Layer,
  Order,
  Post,
  Product,
  Wallet,
  ProductInventory,
  GameInventory,
  User,
  CrossPlatformUser,
  Settings,
  validateFields,
  updateFields
};
