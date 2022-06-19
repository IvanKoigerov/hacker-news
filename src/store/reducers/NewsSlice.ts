import { createSlice } from "@reduxjs/toolkit";
import { INews } from "../../models/INews";


interface NewsState {
   news: INews[];
   isLoading: boolean;
   error: string;
}

const initialState: NewsState = {
   news: [],
   isLoading: false,
   error: ''
}

export const newsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {

   }
})

export default newsSlice.reducer