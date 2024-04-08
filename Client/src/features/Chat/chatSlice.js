import { createSlice } from "@reduxjs/toolkit";
import socketEvents from "../../services/socketEvents";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatList: {},
        chatHistory: [],
        currentChat: "",
    },
    reducers: {
        updateCurrentChat: (state, action) => {
            const { chatId } = action.payload
            state.currentChat = chatId
            state.chatHistory = state.chatList[chatId]?.history || []
        },
        updateChatHistory: (state, action) => {
            const { history } = action.payload
            state.chatHistory = history
        },

        chatCreated: (state, action) => {
            const { chatId, chat } = action.payload
            state.chatList[chatId] = chat
        },
        messageRecieved: (state, action) => {
            const { chatId, message } = action.payload
            state.chatList[chatId].history.push(message)
            if (chatId == state.currentChat) state.chatHistory.push(message)
        },
        updateChats: (state, action) => {
            const { chats } = action.payload
            chats.map(chat => {
                state.chatList[chat._id] = chat
            })
        },
    }
})

export const { updateCurrentChat, chatCreated, messageRecieved, updateChats } = chatSlice.actions

export default chatSlice.reducer