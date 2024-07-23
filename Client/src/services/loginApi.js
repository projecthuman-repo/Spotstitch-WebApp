import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define a service user a base URL
const baseUrl = process.env.LOGIN_SERVER || "http://localhost:4000/api"

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

        // send verification email
        sendVerificationEmail: builder.mutation({
            query: (email) => ({
                url: "/send-verification-email",
                method: "POST",
                body: { email },
            }),
        }),
    }),
});

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation, 
    useLogoutUserMutation,
    useSendVerificationEmailMutation
} = loginApi;

export default loginApi;
