import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from './baseQuery';

// Define a service for settings using a base URL
const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders,
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
