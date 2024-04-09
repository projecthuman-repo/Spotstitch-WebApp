import socketEvents from "../../services/socketEvents";

function chatReducer(draft, action) {
    switch (action.type) {
        case socketEvents.messageSent: {
            draft[action.chatId].history.push(action.message)
            break;
        }
        case socketEvents.chatCreated: {
            draft[action.chatId] = action.chat
            break;
        }
        case socketEvents.chatGetAll: {
            const chats = action.chats
            chats.map(chat => {
                draft[chat._id] = chat
            })
            break;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default chatReducer