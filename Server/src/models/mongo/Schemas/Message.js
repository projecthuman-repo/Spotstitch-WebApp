const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  chatId: String,
  content: String,
  date: String,
  updatedOn: String,
})

const Message = mongoose.model('Message', MessageSchema);

/**
 * Create and send a new message to a chat
 * 
 * @param {string} chatId id of chat to send message
 * @param {*} content content of message
 * @returns newly created message id
 */
const createMessage = async (chatId, content) => {
  try {
    const msg = new Message({
      chatId: chatId,
      content: content,
      date: new Date(),
      updatedOn: new Date()
    })
    await msg.save()
    return msg._id
  } catch (err) {
    throw new Error('Error creating new message')
  }
}
const updateMessage = async (messageId, ctx) => {
  try {
    const msg = Message.findById(messageId)
    msg.content = ctx
    msg.updatedOn = new Date()
    await msg.save()
  } catch (err) {
    throw new Error('Error updating new message')
  }
}
const deleteMessage = async (messageId) => {
  try {
    await Message.findByIdAndDelete(messageId)
  } catch (err) {
    throw new Error('Error deleting message')
  }
 }

module.exports = Message
