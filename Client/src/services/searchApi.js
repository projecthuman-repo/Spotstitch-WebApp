import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, prepareHeaders } from "./baseQuery";

const searchApi = createApi({
    reducerPath: "searchApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders,
    }),

    getUsers: builder.mutation({
        query: () => ({
            url: "/users",
            method: "GET"
        }),
    }),

});


export const {
    useUsersMutation,
} = userApi;

export default userApi;
