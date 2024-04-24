import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from './baseQuery';

const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders
    }),

    endpoints: (builder) => ({
        // Get an address by userId
        getAddressByUserId: builder.query({
            query: (userId) => `/addresses/${userId}/get`,
        }),

        // Add a new address for a userId
        addAddress: builder.mutation({
            query: ({ userId, address }) => ({
                url: `/addresses/${userId}/add`,
                method: 'POST',
                body: address,
            }),
        }),

        // Edit an existing address by addressId
        editAddress: builder.mutation({
            query: ({ addressId, address }) => ({
                url: `/addresses/${addressId}/edit`,
                method: 'PUT',
                body: address,
            }),
        }),

        // Delete an address by addressId
        deleteAddress: builder.mutation({
            query: (addressId) => ({
                url: `/addresses/${addressId}/delete`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAddressByUserIdQuery,
    useAddAddressForUserMutation,
    useEditAddressMutation,
    useDeleteAddressMutation,
} = addressApi;

export default addressApi;
