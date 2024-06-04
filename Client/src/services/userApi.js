import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, prepareHeaders } from "./baseQuery";

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
        // updateDisplayName: builder.mutation({
        //     query: (name) => ({
        //         url: "/user/displayName",
        //         method: "PUT",
        //         body: name
        //     }),
        // }),

        updateFirstName: builder.mutation({
            query: (name) => ({
                url: "/user/firstName",
                method: "PUT",
                body: name
            }),
        }),
        updateLastName: builder.mutation({
            query: (lastName) => ({
                url: "/user/lastName",
                method: "PUT",
                body: lastName
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
    }),
});

export const {
    useGetUserProfileMutation,
    useRegisterSpotstitchMutation,
    useUpdateFirstNameMutation,
    useUpdateLastNameMutation,
    useUpdatePictureMutation,
    // useUpdateDisplayNameMutation,
    useUpdateAccountTypeMutation
} = userApi;

export default userApi;
