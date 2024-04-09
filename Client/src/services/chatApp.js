import socket from "./socket";
import socketEvents from "./socketEvents";

const connect = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMjI3MDk5NywiZXhwIjoxNzEyODc1Nzk3fQ.opHLqRCAwmi-JsixcIoJ-QrLYQSsfyli0n3oj9vNWa4'
    localStorage.getItem('jwtToken')
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
    sendMessage,
    updateMessage,
    typing,
}