const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    users: [String], 
    history: [String], 
    createdAt: String, 
    createdBy: String
})

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat

