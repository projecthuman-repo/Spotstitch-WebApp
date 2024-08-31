import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {REACT_APP_USER_API_URL} from "../constants"
// Define a service for user management using a base URL
const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_USER_API_URL,
    }),

    endpoints: (builder) => ({
        // Register a new user. This should cover cross platform users based on backend logic. Check in with Jacky
        registerUser: builder.mutation({
            query: (userDetails) => ({
                url: '/user/register',
                method: 'POST',
                body: userDetails,
            }),
        }),

        // Login user
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/user/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        // Update user. updateData holds name, email, and phone number
        updateUser: builder.mutation({
            query: ({ id, ...updateData }) => ({
                url: `/user/${id}`,
                method: 'PUT',
                body: updateData,
            }),
        }),

        // Delete user
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;

export default userApi;
