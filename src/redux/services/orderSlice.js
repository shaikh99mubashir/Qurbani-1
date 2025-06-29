import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3050/v1/' }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: 'orders',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi; 