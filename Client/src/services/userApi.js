import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, prepareHeaders } from "./baseQuery";


// Handler Functions in Server\src\routes\api\user\index.js

const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders,
    }),
    endpoints: (builder) => ({
        // finish login and fetch user profile information
        getUserProfile: builder.mutation({
            query: () => ({
                url: "/user/profile",
                method: "GET",
            }),
        }),
        // register user information to spotstitch
        registerSpotstitch: builder.mutation({
            query: (user) => ({
                url: "/user/register",
                method: "POST",
                body: user
            }),
        }),

        // Fetch any user profile information that is public
        viewUserProfile: builder.mutation({
            query: (username) => ({
                url: "/user/viewProfile",
                method: "GET",
                body: username
            }),
        }),

        viewUserProfileById: builder.mutation({
            query: (userId) => ({
                url: "/user/viewProfileById",
                method: "GET",
                body: userId
            }),
        }),

        updateDetails: builder.mutation({
            query: (body) => ({
                url: "/user/details",
                method: "PUT",
                body: body
            }),
        }),

        updatePicture: builder.mutation({
            query: (image) => ({
                url: "/user/image",
                method: "PUT",
                body: image
            }),
        }),

        updateAccountType: builder.mutation({
            query: (type) => ({
                url: "/user/type",
                method: "PUT",
                body: type
            }),
        }),

        updatePost: builder.mutation({
            query: (event) => ({
                url: "/user/event",
                method: "PUT",
                body: type
            }),
        }),
        updateEvent: builder.mutation({
            query: (type) => ({
                url: "/user/event",
                method: "PUT",
                body: type
            }),
        }),
    }),
});

export const {
    useGetUserProfileMutation,
    useRegisterSpotstitchMutation,
    useViewUserProfileMutation,
    useViewUserProfileByIdMutation,
    useUpdateDetailsMutation,
    useUpdatePictureMutation,
    useUpdateAccountTypeMutation
} = userApi;

export default userApi;
