import { createSlice } from "@reduxjs/toolkit";
import userApi from "../../services/userApi";

const inital = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    country: "",
    province: "",
}

export const registerSlice = createSlice({
    name: "register",
    initialState: inital,
    reducers: {
        reset: (state, action) => {
            return inital
        },
        registerData: (state, action) => {
            for (const key in action.payload) {
                state[key] = action.payload[key]
            }
        },
    },
    extraReducers: (builder) => {
        // reset form after completion
        builder.addMatcher(userApi.endpoints.registerUser.matchFulfilled, (state, { payload }) => { return {} });
        // default
        builder.addDefaultCase((state, action) => { })
    },
});

export const { reset, registerData } = registerSlice.actions;
export default registerSlice.reducer;
