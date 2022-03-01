import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
    posts: [],
    post: {}
};

export const getAll = createAsyncThunk("post/getAll", async () => {
    try {
        return await postService.getAll()
    } catch (error) {
        console.error(error)
    }
});

export const create = createAsyncThunk("post/create", async (post) => {
    try {
        return await postService.create(post)
    } catch (error) {
        console.error(error)
    }
})

export const getById = createAsyncThunk("post/getById", async (_id) => {
    try {
        return await postService.getById(_id)
    } catch (error) {
        console.error(error)
    }
})

export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
    try {
        return await postService.deletePost(_id);
    } catch (error) {
        console.error(error);
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
            .addCase(create.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) => post._id !== +action.payload._id);
            })
    },

});
export const { reset } = postSlice.actions;
export default postSlice.reducer;