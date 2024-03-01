import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define a service user a base URL
// fetch("http://localhost:8080/v1/user/login")

const appApi = createApi({
	reducerPath: "appApi",
	baseQuery: fetchBaseQuery({
		// baseUrl: "http://localhost:5001",
		baseUrl: "http://localhost:8080/v1/user",
	}),

	endpoints: (builder) => ({
		// creating the user
		signupUser: builder.mutation({
			query: (user) => ({
				url: "/register",
				method: "POST",
				body: user,
			}),
		}),

		// login
		loginUser: builder.mutation({
			query: (user) => ({
				url: "/login",
				method: "POST",
				body: user,
			}),
		}),

		// logout

		logoutUser: builder.mutation({
			query: (payload) => ({
				url: "/logout",
				method: "DELETE",
				body: payload,
			}),
		}),
	}),
});

export const {
	useSignupUserMutation,
	useLoginUserMutation,
	useLogoutUserMutation,
} = appApi;

export default appApi;
