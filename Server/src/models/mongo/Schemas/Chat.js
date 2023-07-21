const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    users: [String],
    history: [String],
    createdAt: String,
    createdBy: String
})

const Chat = mongoose.model('Chat', ChatSchema);

const createChat = async (res) => {
    try {
        const chat = new Chat({
            ...res,
            createdAt: new Date()
        })
        await chat.save()
        return chat
    } catch (err) {
        throw new Error('Error creating new chat')
    }
}

const deleteChat = async (chatId) => {
    try {
        await Chat.findByIdAndDelete(chatId)
    } catch (err) {
        throw new Error('Error creating new chat')
    }
}

const addUserToChat = async (chatId, userId) => {
    try {
        const chat = await Chat.findById(chatId)
        chat.users.push(userId)
        await chat.save()
    } catch (err) {
        throw new Error('Error adding user to chat')
    }
}

const addToHistory = async (chatId, messageId) => {
    try {
        const chat = await Chat.findById(chatId)
        chat.history.push(messageId)
        await chat.save()
    } catch (err) {
        throw new Error('Error adding message to chat')
    }
}

module.exports = Chat

