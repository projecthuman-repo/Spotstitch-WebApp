import { createSlice } from "@reduxjs/toolkit";
import loginApi from "../../services/loginApi";
import userApi from "../../services/userApi";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: ""
    },
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
        reset: (state, action) => {
            return {}
        },
        login: (state, action) => {
            const { token } = action.payload
            state.token = token
            localStorage.setItem('token', token)
        },
        setUserData: (state, action) => {
            for (const key in action.payload) {
                state[key] = action.payload[key]
            }
        },
    },
    extraReducers: (builder) => {
        // save user after signup
        builder.addMatcher(loginApi.endpoints.registerUser.matchFulfilled, (state, { payload }) => { console.log("registered") });
        // save user after login
        builder.addMatcher(loginApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {  });
        builder.addMatcher(userApi.endpoints.getUserProfile.matchFulfilled, (state, { payload }) => { })
        // logout: destroy user session
        builder.addMatcher(loginApi.endpoints.logoutUser.matchFulfilled, (state, { payload }) => { return {} });
        // default
        builder.addDefaultCase((state, action) => { })
    },
});

export const { addNotifications, resetNotifications, login, reset, setUserData, registerData } = userSlice.actions;
export default userSlice.reducer;
