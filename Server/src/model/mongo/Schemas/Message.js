const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  chatId: String,
  content: String,
  createdOn: String,
  updatedOn: String,
})

/**
 * Create and send a new message to a chat
 * 
 * @param {string} chatId id of chat to send message
 * @param {*} content content of message
 * @returns newly created message
 */
MessageSchema.statics.createMessage = async (chatId, content) => {
  try {
    const msg = new Message({
      chatId: chatId,
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
    await this.delete()
  } catch (err) {
    throw new Error('Error deleting message')
  }
 }

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message
