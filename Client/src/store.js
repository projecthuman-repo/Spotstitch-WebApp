import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/userSlice";
import chatSlice from "./features/Chat/chatSlice";
import loginApi from "./services/loginApi"
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import registerSlice from "./features/User/registerSlice";
import userApi from "./services/userApi";
import postApi from "./services/posts"
import walletApi from "./services/wallet";
import addressApi from "./services/address";

// reducers
const appReducer = combineReducers({
    user: userSlice,
    register: registerSlice,
    chat: chatSlice,
    [loginApi.reducerPath]: loginApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
});

const rootReducer = (state, action) => {
    if (action.type === "RESET") {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ['user', 'register', 'chat'],
    blackList: [loginApi.reducerPath],
};

// persist our store
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating the store

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([
            loginApi.middleware, 
            userApi.middleware,
            postApi.middleware,
            walletApi.middleware,
            addressApi.middleware
        ])
});

export default store;
