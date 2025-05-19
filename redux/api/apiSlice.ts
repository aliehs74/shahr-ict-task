import { IProduct } from '@/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser } from '@/types/user';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], number>({
      query: (limit: number = 10) => `/products?limit=${limit}`,
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => '/users', //just 10 items are available so scrolling is canceled
    }),
    getUserById: builder.query<IUser | null, number>({
      query: (id: number) => `/users/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetUsersQuery, useGetUserByIdQuery } = apiSlice;