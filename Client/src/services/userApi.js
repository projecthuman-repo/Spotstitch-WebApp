import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// define a service user a base URL
const baseUrl = process.env.LOGIN_SERVER || "http://localhost:8080/v1/user"

const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user?.token
            if (token) { headers.set('authorization', `Bearer ${token}`) }
            return headers
        },
     }),
    endpoints: (builder) => ({
        // finish login and fetch user profile information
        getUserProfile: builder.mutation({
            query: () => ({
                url: "/profile",
                method: "GET",
            }),
        }),
        // register user information to spotstitch
        registerSpotstitch: builder.mutation({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user
            }),
        }),
        updatePicture: builder.mutation({
            query: (image) => ({
                url: "/image",
                method: "PUT",
                body: image
            }),
        }),

        updateAccountType: builder.mutation({
            query: (type) => ({
                url: "/type",
                method: "PUT",
                body: type
            }),
        }),
    }),
});

export const { useGetUserProfileMutation, useRegisterSpotstitchMutation, useUpdatePictureMutation, useUpdateAccountTypeMutation } = userApi;

export default userApi;
