import socket from "./socket";
import socketEvents from "./socketEvents";

const connect = async () => {
    const token = localStorage.getItem('token')
    socket.emit('connected', token)
}

const createChat = async (users) => {
    const res = await socket.emitWithAck(socketEvents.chatCreate, users)
    return res
}

const getChats = async () => {
    const chats = await socket.emitWithAck(socketEvents.chatGetAll)
    return chats
}

const getChat = async (chatId) => {
    return await socket.emitWithAck(socketEvents.chatOpen, chatId)
}

const addToChat = async (users) => {
    const chats = await socket.emitWithAck(socketEvents.addToChat, users)
    return chats
}

const sendMessage = async (chat, content) => {
    return await socket.emitWithAck(socketEvents.messageSend, chat, content)
}

const updateMessage = (chatId, msgId, content) => {
    socket.emit(socketEvents.messageUpdate, chatId, msgId, content)
}

const typing = (state) => {

}

export {
    createChat,
    connect,
    getChats,
    getChat,
    addToChat,
    sendMessage,
    updateMessage,
    typing,
}