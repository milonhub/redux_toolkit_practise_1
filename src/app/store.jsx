import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/Posts/postSlice";

const store = configureStore({
    reducer:{
        post: postSlice,
    }
})

export default store;