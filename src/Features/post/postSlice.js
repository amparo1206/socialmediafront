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
export const getPostByName = createAsyncThunk("post/getPostByName", async (title) => {
    try {
        return await postService.getPostByName(title)
    } catch (error) {
        console.error(error)
    }
})

export const deletePosts = createAsyncThunk("posts/deletePost", async (_id) => {
    try {
        return await postService.deletePosts(_id);
    } catch (error) {
        console.error(error);
    }
});

export const like = createAsyncThunk("/like", async (_id) => {
    try {
        return await postService.like(_id)
    } catch (error) {
        console.error(error)
    }
})

export const disLike = createAsyncThunk("/disLike", async (_id) => {
    try {
        return await postService.disLike(_id)
    } catch (error) {
        console.error(error)
    }
})


export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.post = action.payload;
            })
            .addCase(getPostByName.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.posts = [action.payload,...state.posts]
            })
            .addCase(deletePosts.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) => post._id !== action.payload.post._id.toString());
            })
            .addCase(like.fulfilled, (state, action)=>{
                const posts = state.posts.map((post) => {
                    if (post._id === action.payload._id) {
                    post = action.payload
                    }
                    return post
                })
                state.posts = posts
            })
            .addCase(disLike.fulfilled, (state, action) => {
                const posts = state.posts.map((post) => {
                    if (post._id === action.payload._id) {
                    post = action.payload
                    }
                    return post
                })
                state.posts = posts
        })
    },

});
export const { reset } = postSlice.actions;
export default postSlice.reducer;