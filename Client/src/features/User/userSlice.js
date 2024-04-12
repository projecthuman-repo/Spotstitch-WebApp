import { createSlice } from "@reduxjs/toolkit";
import userApi from "../../services/userApi";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addNotifications: (state, { payload }) => {
            if (state.newMessages[payload]) {
                state.newMessages[payload] = state.newMessages[payload] + 1;
            } else {
                state.newMessages[payload] = 1;
            }
        },
        resetNotifications: (state, { payload }) => {
            delete state.newMessages[payload];
        },
        logout: (state, action) => {
            return {}
        },
        login: (state, action) => {
            const { token } = action.payload
            state.token = token
        },
        setUserData: (state, action) => {
            for (const key in action.payload) {
                state[key] = action.payload[key]
            }
        },
    },
    extraReducers: (builder) => {
        // save user after signup
        builder.addMatcher(userApi.endpoints.registerUser.matchFulfilled, (state, { payload }) => { console.log("registered") });
        // save user after login
        builder.addMatcher(userApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => { state.token = payload.token });
        // logout: destroy user session
        builder.addMatcher(userApi.endpoints.logoutUser.matchFulfilled, (state, { payload }) => { });
        // default
        builder.addDefaultCase((state, action) => { })
    },
});

export const { addNotifications, resetNotifications, login, logout, setUserData, registerData } = userSlice.actions;
export default userSlice.reducer;
