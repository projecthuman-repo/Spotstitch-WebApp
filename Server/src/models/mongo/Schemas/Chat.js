const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    users: [String],
    history: [String],
    createdAt: String,
    createdBy: String
})

ChatSchema.methods.getChatHistory = (chatID) => {
    const chat = this.findById(chatID).exec((err, res) => {
        if (err) throw err;
        else return res.history
    })
}
ChatSchema.methods.getChatUsers = (chatID) => {
    const users = this.findById(chatID).exec((err, res) => {
        if (err) throw err;
        else return res.users
    })
}
ChatSchema.methods.createSpotstitchChat = (userInput) => {
    const chat = new Chat({
        users: [],
        history: [],
        createdAt: new Date(),
        createdBy: ''
    })

    chat.save()
        .then((res) => { console.log(res) })
        .catch((err) => { throw err })

    return chat
}

const Chat = mongoose.model('Chat', ChatSchema);



module.exports = Chat

