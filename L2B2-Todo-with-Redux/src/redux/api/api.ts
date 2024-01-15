import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
    addTodo: builder.mutation({
      query: () => ({
        url: "/task",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation} = baseApi;

