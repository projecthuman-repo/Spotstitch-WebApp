const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const Settings = require('./Settings');
const Wallet = require('./Wallet')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Can't be blank"],
    },
    firstName: {
      type: String,
      required: [true, "Can't be blank"],
    },
    lastName: {
      type: String,
      required: [true, "Can't be blank"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "Can't be blank"],
      index: true,
      validate: [isEmail, 'invalid email'],
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: [true, "Can't be blank"],
    },
    password: {
      type: String,
      required: [true, "Can't be blank"],
    },
    picture: {
      type: String,
    },
    newMessages: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: 'online',
    },
    userType: {
      type: String,
      required: [true, "Can't be blank"],
    },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    Layers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Layer' }],
    gameInventory: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'GameInventory' },
    ],
    productInventory: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'ProductInventory' },
    ],
    wallet: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }],
    chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Notification' },
    ],
    settings: { type: mongoose.Schema.Types.ObjectId, ref: 'Settings' }
  },
  { minimize: false }
);

UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

UserSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('invalid email or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('invalid email or password');
  return user;
};

UserSchema.statics.createNewUser = async function () {
  const user = new User()
  const settings = await Settings.createSettings(user._id)
  const wallet = await Wallet.create(user._id)
  
  user.settings = settings._id
  user.wallet = wallet._id
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
