import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { INews } from "../models/INews"

export const newsApi = createApi({
   reducerPath: 'NewsPath',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0' }),
   endpoints: (build) => ({
      fetchAllNews: build.query<number[], number>({
         query: (limit: number = 10) => ({
            url: '/newstories.json',
            params: {
               _limit: limit,
            }
         })
      }),
      fetchNews: build.query<INews, any>({
         query: (id: number) => ({
            url: `/item/${id}.json`,
         })
      }),
   })
})

