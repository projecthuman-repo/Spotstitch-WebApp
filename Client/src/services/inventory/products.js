import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/products',
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
