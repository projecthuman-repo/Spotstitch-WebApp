import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {REACT_APP_USER_API_URL} from "../constants"
const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${REACT_APP_USER_API_URL}/products`,
    }),
    endpoints: (builder) => ({
        getProductInventory: builder.query({
            query: (userId) => `/${userId}`,
        }),
        createProductInventory: builder.mutation({
            query: ({ userId }) => ({
                url: `/${userId}/create`,
                method: 'POST'
            }),
        }),
        addProduct: builder.mutation({
            query: ({ userId, productId }) => ({
                url: `/${userId}/add/${productId}`,
                method: 'POST'
            }),
        }),
        removeProduct: builder.mutation({
            query: ({ userId, productId }) => ({
                url: `/${userId}/delete/${productId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetProductInventoryQuery,
    useCreateProductInventoryMutation,
    useAddProductMutation,
    useRemoveProductMutation,
} = productsApi;

export default productsApi;
