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
        getAddress: builder.query({
            query: () => `/address/get`,
        }),

        // Add a new address for a userId
        addAddress: builder.mutation({
            query: (address) => ({
                url: `/address/add`,
                method: 'POST',
                body: address,
            }),
        }),

        // Edit an existing address by addressId
        editAddress: builder.mutation({
            query: ({ addressId, address }) => ({
                url: `/address/${addressId}/edit`,
                method: 'PUT',
                body: address,
            }),
        }),

        // Delete an address by addressId
        deleteAddress: builder.mutation({
            query: (addressId) => ({
                url: `/address/${addressId}/delete`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAddressQuery,
    useAddAddressMutation,
    useEditAddressMutation,
    useDeleteAddressMutation,
} = addressApi;

export default addressApi;
