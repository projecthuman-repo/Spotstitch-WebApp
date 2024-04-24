import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders,
    }),

    endpoints: (builder) => ({
        // get product
        getProduct: builder.query({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: "GET"
            })
        }),

        // get all product
        getAllProducts: builder.query({
            query: () => ({
                url: "/products/all",
                method: "GET",
            }),
        }),
        
        //create new product
        createProduct: builder.mutation({
            query: (product) => ({
                url: "/products/create",
                method: "POST",
                body: product,
            })
        }),

        //edit product
        editProduct: builder.mutation({
            query: ({productId, ...product}) => ({
                url: `/products/${productId}/edit`,
                method: "PUT",
                body: product
            })
        }),

        // delete product
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/products/${productId}/delete`,
                method: "DELETE",
            }),
        }),
    })
});

export const {
    useGetProductQuery,
    useGetAllProductsQuery,
    useCreateProductMutation,
    useEditProductMutation,
    useDeleteProductMutation,
} = productsApi;

export default productsApi;
