const{ Chat } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        
        const newUsers = req.body
        const { chatId } = req.params

        const chat = await Chat.getChat(chatId)
        if (!chat) throw new Error()

        let i = 0
        const LEN = newUsers.length()
        while( i < LEN ) {

            let user = newUsers[i]
            chat.addUserToChat(user._id)
            
            i = i+1;
        }
        
        res.status(201).json(chat);
    } catch (e) {
        logger.error({e}, 'Error adding users')
        res.status(400).json(createErrorResponse(400, 'Error sendingadding users'))
        
    }
}