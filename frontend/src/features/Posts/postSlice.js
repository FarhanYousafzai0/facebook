import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, getallPost } from './postService';

// Initial State
const initialState = {
    post: [],
    postLoading: false,
    postError: false,
    postSuccess: false,
    postMessage: "",
};

// Async Thunks
export const addPostData = createAsyncThunk(
    'post/addPost',
    async (postData, thunkAPI) => {
        try {
            return await addPost(postData);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.error || 'Something went wrong!'
            );
        }
    }
);

export const getFacebookPost = createAsyncThunk(
    'post/getFacebookPost',
    async (_, thunkAPI) => {
        try {
            const posts = await getallPost(); // fixed function name
            return posts;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error?.response?.data?.error || 'Posts not found!'
            );
        }
    }
);

// Slice
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postReset: (state) => {
            state.postError = false;
            state.postLoading = false;
            state.postMessage = '';
            state.postSuccess = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Add Post
            .addCase(addPostData.pending, (state) => {
                state.postLoading = true;
            })
            .addCase(addPostData.rejected, (state, action) => {
                state.postError = true;
                state.postLoading = false;
                state.postMessage = action.payload;
            })
            .addCase(addPostData.fulfilled, (state, action) => {
                state.postError = false;
                state.postLoading = false;
                state.postSuccess = true;
                state.postMessage = 'Post added successfully!';
                state.post.unshift(action.payload); // fixed: use payload
            })

            // Get All Posts
            .addCase(getFacebookPost.pending, (state) => {
                state.postLoading = true;
            })
            .addCase(getFacebookPost.rejected, (state, action) => {
                state.postLoading = false;
                state.postError = true;
                state.postMessage = action.payload;
            })
            .addCase(getFacebookPost.fulfilled, (state, action) => {
                state.postLoading = false;
                state.postError = false;
                state.post = action.payload;
            });
    },
});

export const { postReset } = postSlice.actions;
export default postSlice.reducer;
