const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    users: [String],
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    createdAt: String,
})

ChatSchema.statics.getChat = async (id) => {
    try {
        const chat = await Chat.findById(id)
        return chat
    } catch (err) {
        throw new Error('Error getting chat: ' + id)
    }
}

ChatSchema.statics.getUserChats = async (username) => {
    try {
        const chat = await Chat.find({ users: { $elemMatch: { $eq: username } } })
        return chat
    } catch (err) {
        throw new Error('Error getting user chats')
    }
}

ChatSchema.statics.createChat = async ({ users = [] }) => {
    try {
        const dupe = await Chat.findOne({ users: users })
        if (dupe) { return dupe }
        else {
            const chat = new Chat({
                users: users,
                history: [],
                createdAt: new Date(),
            })
            await chat.save()
            return chat
        }
    } catch (err) {
        throw new Error('Error creating new chat: ' + err.message)
    }
}

ChatSchema.methods.getHistory = async function () {
    try {
        return this.history
    } catch (err) {
        throw new Error('Error getting chat history')
    }
}

ChatSchema.methods.addUserToChat = async function (userId) {
    try {
        this.users.push(userId)
        await this.save()
    } catch (err) {
        throw new Error('Error adding user to chat')
    }
}

ChatSchema.methods.addMessage = async function (messageId) {
    try {
        this.history.push(messageId)
        await this.save()
    } catch (err) {
        throw new Error('Error adding message to chat')
    }
}

ChatSchema.methods.deleteMessage = async function (id) {
    try {
        this.history.splice(this.history.indexOf(id), 1)
        this.save()
    } catch (err) {
        throw new Error('Error deleting message')
    }
}

ChatSchema.methods.deleteChat = async function () {
    try {
        await this.delete()
    } catch (err) {
        throw new Error('Error deleting chat')
    }
}

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat

