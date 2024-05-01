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
    useUpdatePictureMutation,
    useUpdateAccountTypeMutation
} = userApi;

export default userApi;
