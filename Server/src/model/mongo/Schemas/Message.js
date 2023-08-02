const mongoose = require('mongoose');
const Chat = require('./Chat');

const MessageSchema = new mongoose.Schema({
  chatId: String,
  author: String,
  content: String,
  createdOn: String,
  updatedOn: String,
})

MessageSchema.statics.getMessage = async (id) => {
  try {
    const msg = await Message.findById(id)
    return msg
  } catch (err) {
    throw new Error('Error updating new message')
  }
}

/** 
 * Create and send a new message to a chat
 * 
 * @param {string} chatId id of chat to send message
 * @param {string} author id of sender
 * @param {*} content content of message
 * @returns newly created message
 */
MessageSchema.statics.createMessage = async (chatId, author, content) => {
  try {
    const msg = new Message({
      chatId: chatId,
      author: author,
      content: content,
      createdOn: new Date(),
      updatedOn: new Date()
    })
    await msg.save()
    return msg
  } catch (err) {
    throw new Error('Error creating new message')
  }
}

MessageSchema.methods.editMessage = async function(ctx) {
  try {
    this.updatedOn = new Date()
    this.content = ctx
    await this.save()
  } catch (err) {
    throw new Error('Error updating new message')
  }
}

MessageSchema.methods.deleteMessage = async function() {
  try {
    const chat = await Chat.getChat(this.chatId)
    chat.deleteMessage(this._id)

    await this.delete()
  } catch (err) {
    throw new Error('Error deleting message')
  }
 }

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message
