const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const Settings = require('./Settings');
const Wallet = require('./Wallet');
const logger = require('../../../logger');

const VENDOR_TYPE = "vendor"
const USER_TYPE = "personal"

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Can't be blank"],
    },
    displayName: {
      type: String,
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
    // password: {
    //   type: String,
    //   required: [true, "Can't be blank"],
    // },
    picture: {
      type: String,
    },
    banner: {
      type: String,
    },
    token: {
      type: String,
    },
    biography: {
      type: String,
      ref: "biography"
    },
    website: {
      type: String,
      ref: "website"
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
      default: "personal",
      required: [true, "Can't be blank"],
    },
    //otherAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    otherAccounts: {
      type: Map,
      of: [String],
      ref: 'User'
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
    settings: { type: mongoose.Schema.Types.ObjectId, ref: 'Settings' },

    following: { type: [String], default: [] },
    followers: { type: [String], default: [] },

    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],

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

UserSchema.statics.createUser = async function (userData) {
  try {
    const dupe = await User.findOne({ username: userData.username })
    if (dupe) throw new Error("Username already exists")

    const user = new User(userData)
    const settings = await Settings.createSettings(user._id)
    const wallet = await Wallet.createWallet(user._id)

    user.settings = settings._id
    user.wallet = wallet._id

    user.save()
    return user
  } catch (error) {
    throw new Error(error)
  }

}

UserSchema.statics.getUser = async function () {
  
}

UserSchema.methods.getUserData = async function () {
  const numFollowing = this.following?.length || 0
  const numFollowers = this.followers?.length || 0
  
  const userProfile = {
    username: this.username,
    displayName: this.displayName,
    email: this.email,
    picture: this.picture,
    biography: this.biography,
    website: this.website,
    banner: this.banner,
    userType: this.userType,
    settings: this.settings,
    following: numFollowing,
    followers: numFollowers,
  }
  return userProfile
}

UserSchema.methods.updateDetails = async function (body) {
  try {
    if (!body) throw new Error("No details given")

    if (body.firstName) this.firstName = body.firstName
    if (body.lastName) this.lastName = body.lastName
    // if (body.biography) this.biography = body.biography
    // if (body.website) this.website = body.website

    await this.save

    return this.firstName
  } catch (error) {
    throw new Error(error)
  }
}

UserSchema.methods.updatePicture = async function (image) {
  try {
    if (!image) throw new Error("No image given")
    this.picture = image
    await this.save({ validateBeforeSave: false })

    return this.picture
  } catch (error) {
    throw new Error(error)
  }
}

UserSchema.methods.updateBanner = async function (image) {
  try {
    if (!image) throw new Error("No image given")
    this.banner = image
    await this.save({ validateBeforeSave: false })

    return this.banner
  } catch (error) {
    throw new Error(error)
  }
}

UserSchema.methods.updateAccountType = async function (type) {
  try {
    if (!type) throw new Error("No type given")
    if (type != USER_TYPE || type != VENDOR_TYPE) throw new Error("Invalid type")
    this.userType = type
    await this.save()

    return this.userType
  } catch (error) {
    throw new Error(error)
  }
}

UserSchema.methods.updateChats = async function (chat) {
  try {
    if (!chat) throw new Error("No chat given")
    this.chat.append(chat)
    await this.save()

    return this.chat
  } catch (error) {
    throw new Error(error)
  }
}

UserSchema.methods.updatePosts = async function (post) {
  try {
    if (!post) throw new Error("No post given")
    this.posts.append(post)
    await this.save()

    return this.posts
  } catch (error) {
    throw new Error(error)
  }
}


const User = mongoose.model('User', UserSchema);

module.exports = User;
