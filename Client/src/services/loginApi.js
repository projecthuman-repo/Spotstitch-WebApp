import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {REACT_APP_LOGIN_API_URL} from "../constants"
// define a service user a base URL
const baseUrl = REACT_APP_LOGIN_API_URL //process.env.LOGIN_SERVER || "http://localhost:4000/api"

const loginApi = createApi({
    reducerPath: "loginServer",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        // creating the user
        registerUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
        }),

        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user,
            }),
        }),

        // logout

        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "/logout",
                method: "DELETE",
                body: payload,
            }),
        }),
    }),
});

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation, 
    useLogoutUserMutation 
} = loginApi;

export default loginApi;
