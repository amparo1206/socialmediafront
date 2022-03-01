import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
    posts: [],
};

export const getAll = createAsyncThunk("post/getAll", async () => {
    try {
        return await postService.getAll()
    } catch (error) {
        console.error(error)
    }
});

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload;
          })
      },
    
});

export default postSlice.reducer;