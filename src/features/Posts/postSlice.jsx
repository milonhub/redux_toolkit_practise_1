import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("posts/fetchData", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data;

})
const postDataSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        error: null,
        data: []
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchData.pending, (state)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })

        builder.addCase(fetchData.fulfilled, (state, action)=>{

            state.data = [];
            state.error = action.error.message;
        })

    }
})

export default postDataSlice.reducer;