import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import chatSlice from "./features/Chat/chatSlice";
import appApi from "./services/appApi";

// persist our store
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

// reducers
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath],
};

// persist our store

const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store

const store = configureStore({
    reducer: {
        user: userSlice,
        chat: chatSlice
    },
    middleware: [thunk, appApi.middleware],
});

export default store;
