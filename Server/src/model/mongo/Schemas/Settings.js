const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    general: {
        messages: {
            anyone: { type: Boolean, default: true },
            friends: { type: Boolean, default: true },
            friendsOfFriends: { type: Boolean, default: true },
            trades: { type: Boolean, default: true },
        },
        notifications: {
            all: { type: Boolean, default: true },
            messages: { type: Boolean, default: true },
            commentsOnPost: { type: Boolean, default: true },
            repliesToComment: { type: Boolean, default: true },
            trades: { type: Boolean, default: true },
            events: { type: Boolean, default: true },
        }
    },
    account: {

    },
    security: {
        visibility: { type: Boolean, default: true },
        viewable: {
            anyone: { type: Boolean, default: false },
            friends: { type: Boolean, default: true },
            friendsOfFriends: { type: Boolean, default: true },
        }
    }
})

SettingsSchema.statics.getSettings = async (userId) => {
    try {
        const setting = await Settings.findOne({ userId: userId })
        if (setting) return setting
        else throw new Error('Invalid settings, User doesnt not exist')
    } catch (err) {
        throw new Error(err)
    }
}

SettingsSchema.statics.createSettings = async (userId) => {
    try {
        const settings = new Settings({ userId: userId })
        await settings.save()
        return settings
    } catch (err) {
        throw new Error(err)
    }
}

SettingsSchema.methods.updateSettings = async function (settings) {
    try {
        if (settings.general) this.general = settings.general
        if (settings.account) this.account = settings.account
        if (settings.security) this.security = settings.security
        await this.save()
    } catch (err) {
        throw new Error(err)
    }
}

SettingsSchema.statics.deleteSettings = async function (userId) {
    try {
        const res = await Settings.findOneAndDelete({ userId: userId })
        return res
    } catch (err) {
        throw new Error(err)
    }
}


const Settings = mongoose.model('Settings', SettingsSchema);

module.exports = Settings
