const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    users: [String],
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    createdAt: String,
    createdBy: String
})

ChatSchema.statics.getChat = async (id) => {
    try {
        const chat = await Chat.findById(id)
        return chat
    } catch (err) {
        throw new Error('Error creating new chat')
    }
}

ChatSchema.statics.getUserChat = async (userId) => {
    try {
        const chat = await Chat.find({ users: userId })
        return chat
    } catch (err) {
        throw new Error('Error creating new chat')
    }
}

ChatSchema.statics.createChat = async ({ users = [], messages = [] }) => {
    try {
        const chat = new Chat({
            users: users,
            history: messages,
            createdAt: new Date(),
        })
        await chat.save()
        return chat
    } catch (err) {
        throw new Error('Error creating new chat: ' + err)
    }
}

ChatSchema.methods.getHistory = async function () {
    try {
        if (!Chat.populated('Message')) {
            await Chat.populate('Message')
        }
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
        throw new Error('Error creating new chat')
    }
}

ChatSchema.methods.deleteChat = async function () {
    try {
        await this.delete()
    } catch (err) {
        throw new Error('Error creating new chat')
    }
}

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat

