import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from './baseQuery';


const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders
    }),

    endpoints: (builder) => ({
        // Get all events
        getAllEvents: builder.query({
            query: () => '/events/all',
        }),

        // Get a single event by eventId
        getEvent: builder.query({
            query: (eventId) => `/events/${eventId}`,
        }),

        // Host a new event
        hostEvent: builder.mutation({
            query: (event) => ({
                url: '/events/create',
                method: 'POST',
                body: event,
            }),
        }),

        // Update an existing event
        updateEvent: builder.mutation({
            query: ({ eventId, ...eventInfo }) => ({
                url: `/events/${eventId}/update`,
                method: 'PUT',
                body: eventInfo,
            }),
        }),

        // Cancel (delete) an event
        cancelEvent: builder.mutation({
            query: (eventId) => ({
                url: `/events/${eventId}/cancel`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAllEventsQuery,
    useGetEventQuery,
    useHostEventMutation,
    useUpdateEventMutation,
    useCancelEventMutation,
} = eventsApi;

export default eventsApi;
