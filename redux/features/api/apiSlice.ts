import { IProduct } from '@/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser } from '@/types/user';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], number>({
      query: (limit: number = 10) => `/products?limit=${limit}`,
    }),
    getUsers: builder.query<IUser[], number>({
      query: () => '/users', //just 10 items are available so scrolling is canceled
    }),
  }),
});
// i want to make a query for single user but i think hen i call all users i get repetitive data anyway

export const { useGetProductsQuery, useGetUsersQuery } = apiSlice;