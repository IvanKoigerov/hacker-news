import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IComments } from "../models/IComments"
import { INews } from "../models/INews"

export const newsApi = createApi({
   reducerPath: 'NewsPath',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hnpwa.com/v0/' }),
   endpoints: (build) => ({
      fetchAllNews: build.query<INews[], number>({
         query: (list: number = 1) => ({
            url: `newest/${list}.json`
         })
      }),
      fetchNews: build.query<IComments, any>({
         query: (id: any) => ({
            url: `item/${id}.json`,
         })
      }),
   })
})

