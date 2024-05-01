import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from './baseQuery';



// Define a service for the user wallet using a base URL
const walletApi = createApi({
    reducerPath: 'walletApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders,
    }),

    endpoints: (builder) => ({
        // Get user wallet
        getWallet: builder.query({
            query: () => ({
                url: '/wallet',
                method: 'GET',
            }),
        }),

        // Add a card to the wallet
        addCard: builder.mutation({
            query: (card) => ({
                url: '/wallet/add',
                method: 'POST',
                body: card,
            }),
        }),

        // Remove a card from the wallet
        removeCard: builder.mutation({
            query: (index) => ({
                url: `/wallet/remove/${index}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetWalletQuery,
    useAddCardMutation,
    useRemoveCardMutation,
} = walletApi;

export default walletApi;
