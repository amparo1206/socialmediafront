import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
    posts: [],
/*     isLoading: false, */
    post:{}
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

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
/*         reset: (state) => {
            state.isLoading = false;
        } */
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
/*             .addCase(getAll.pending, (state, action) => {
                state.isLoading = true;
            }) */
            .addCase(create.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.posts = action.payload;
        })
    },

});
export const { reset } = postSlice.actions;
export default postSlice.reducer;