import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User/userSlice";
import chatSlice from "./features/Chat/chatSlice";
import userApi from "./services/userApi"
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

// reducers
const appReducer = combineReducers({
    user: userSlice,
    register: registerSlice,
    chat: chatSlice,
    [userApi.reducerPath]: userApi.reducer,
});

const rootReducer = (state, action) => {
    if (action.type === SIGNOUT_REQUEST) {
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
    blackList: [userApi.reducerPath],
};

// persist our store
const persistedReducer = persistReducer(persistConfig, appReducer);

// creating the store

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([userApi.middleware])
});

export default store;
