import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { CommentsData } from '../models/CommentsData';
import { NewsData } from '../models/NewsData';

export const newsApi = createApi({
  reducerPath: 'NewsPath',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hnpwa.com/v0/' }),
  endpoints: (build) => ({
    fetchAllNews: build.query<NewsData[], number>({
      query: (list: number) => ({
        url: `newest/${list}.json`,
      }),
    }),
    fetchNews: build.query<CommentsData, string>({
      query: (id: string) => ({
        url: `item/${id}.json`,
      }),
    }),
  }),
});

export const newsLocalApi = createApi({
  reducerPath: 'NewsPath',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (build) => ({
    fetchAllNews: build.query<NewsData[], number>({
      query: () => ({
        url: '/',
      }),
    }),
    fetchNews: build.query<CommentsData, string>({
      query: (id: string) => ({
        url: `item/${id}`,
      }),
    }),
  }),
});
