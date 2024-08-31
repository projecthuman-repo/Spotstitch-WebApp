import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {REACT_APP_USER_API_URL} from "../constants"
const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${REACT_APP_USER_API_URL}/games`,
    }),
    endpoints: (builder) => ({
        getGameInventory: builder.query({
            query: (userId) => `/${userId}`,
        }),
        createGamesInventory: builder.mutation({
            query: ({ userId }) => ({
                url: `/create/${userId}`,
                method: 'POST'
            }),
        }),
        addGame: builder.mutation({
            query: ({ userId, gameId }) => ({
                url: `/add/${userId}/${gameId}`,
                method: 'POST',
            }),
        }),
        removeGame: builder.mutation({
            query: ({ userId, productId }) => ({
                url: `/delete/${userId}/${productId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetGameInventoryQuery,
    useCreateGamesInventoryMutation,
    useAddGameMutation,
    useRemoveGameMutation,
} = gamesApi;

export default gamesApi;
