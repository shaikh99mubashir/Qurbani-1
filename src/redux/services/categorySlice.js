import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

console.log('CategorySlice - BASE_URL:', BASE_URL);

export const categorySlice = createApi({
  reducerPath: 'categorySlice',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      console.log('CategorySlice - Preparing headers for:', BASE_URL);
      // Get token from localStorage or Redux state
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['category'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (params = {}) => {
        console.log('CategorySlice - Making query to:', `${BASE_URL}/categories`, 'with params:', params);
        return {
          url: '/categories',
          method: 'GET',
          params: {
            ...params
          },
        };
      },
      transformResponse: (response) => {
        console.log('CategorySlice - Response received:', response);
        // The response is already an array, no need to access .data
        return response;
      },
      // Auto refetch every 30 seconds
      pollingInterval: 30000,
      // Refetch when window regains focus
      refetchOnFocus: true,
      // Refetch when reconnecting to network
      refetchOnReconnect: true,
      // Keep data in cache for 5 minutes
      keepUnusedDataFor: 300,
      // Provide cache tags for invalidation
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'category', id: _id })),
              { type: 'category', id: 'LIST' },
            ]
          : [{ type: 'category', id: 'LIST' }],
    }),
    
    // Mutation to invalidate cache and force refetch
    invalidateCategories: builder.mutation({
      query: () => ({
        url: '/categories/invalidate',
        method: 'POST',
      }),
      // Invalidate all category cache
      invalidatesTags: [{ type: 'category', id: 'LIST' }],
    }),
  }),
});


export const {
  useGetCategoriesQuery,
  useInvalidateCategoriesMutation,
} = categorySlice; 