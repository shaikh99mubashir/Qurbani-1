import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

// Define ProductParams type
const ProductParams = {
    page: 1,
    limit: 12,
    keyword: "",
    price: ""
};

export const productSlice = createApi({
    reducerPath: 'productSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => ({
                url: `/product`,
                method: "GET",
                params: {
                    page: params?.page ?? 1,
                    limit: params?.limit ?? 12,
                    keyword: params?.keyword ?? "",
                    price: params?.price ?? ""
                },
            }),
            transformResponse: (response) => response.data,
        }),

        getProductById: builder.query({
            query: ({ id }) => ({
                url: `/product/${id}`,
                method: "GET",
            }),
            transformResponse: (response) => response.data,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery
} = productSlice;
