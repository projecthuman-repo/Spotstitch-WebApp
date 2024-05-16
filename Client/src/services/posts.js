import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, prepareHeaders } from './baseQuery';

const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: prepareHeaders,
    }),

    endpoints: (builder) => ({
        // Get all posts
        getAllPosts: builder.query({
            query: () => '/posts/all',
        }),

        // Get a single post by postId
        getPost: builder.query({
            query: (postId) => `/posts/${postId}`,
        }),

        // Create a new post
        createPost: builder.mutation({
            query: (post) => ({
                url: '/posts/create',
                method: 'POST',
                body: post,
            }),
        }),

        // Update a post
        updatePost: builder.mutation({
            query: ({ postId, ...post }) => ({
                url: `/posts/${postId}/update`,
                method: 'PUT',
                body: post,
            }),
        }),

        // Delete a post
        deletePost: builder.mutation({
            query: (postId) => ({
                url: `/posts/${postId}/delete`,
                method: 'DELETE',
            }),
        }),

        // Create a comment on a post
        createComment: builder.mutation({
            query: ({ postId, comment }) => ({
                url: `/posts/${postId}/comment`,
                method: 'POST',
                body: comment,
            }),
        }),
    }),
});

export const {
    useGetAllPostsQuery,
    useGetPostQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
    useCreateCommentMutation,
} = postsApi;

export default postsApi;
