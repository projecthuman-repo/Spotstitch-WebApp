import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service for layers using a base URL
const layersApi = createApi({
    reducerPath: 'layersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001',
    }),

    endpoints: (builder) => ({
        // Get all layers
        getAllLayers: builder.query({
            query: () => '/layers/all',
        }),

        // Get a single layer by layerId
        getLayer: builder.query({
            query: (layerId) => `/layers/${layerId}`,
        }),

        // Create a new layer
        createLayer: builder.mutation({
            query: (layer) => ({
                url: '/layers/create',
                method: 'POST',
                body: layer,
            }),
        }),

        // Update a layer
        updateLayer: builder.mutation({
            query: ({ layerId, ...layerInfo }) => ({
                url: `/layers/${layerId}/update`,
                method: 'PUT',
                body: layerInfo,
            }),
        }),

        // Delete a layer
        deleteLayer: builder.mutation({
            query: (layerId) => ({
                url: `/layers/${layerId}/delete`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAllLayersQuery,
    useGetLayerQuery,
    useCreateLayerMutation,
    useUpdateLayerMutation,
    useDeleteLayerMutation,
} = layersApi;

export default layersApi;
