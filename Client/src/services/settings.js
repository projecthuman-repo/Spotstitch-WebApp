import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service for settings using a base URL
const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001',
    }),

    endpoints: (builder) => ({
        // Get current settings
        getSettings: builder.query({
            query: () => '/settings',
        }),

        // Update settings
        updateSettings: builder.mutation({
            query: (settings) => ({
                url: '/settings/update',
                method: 'POST',
                body: settings,
            }),
        }),
    }),
});

export const {
    useGetSettingsQuery,
    useUpdateSettingsMutation,
} = settingsApi;

export default settingsApi;
