import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, getallPost } from './postService';


// Initial State
const initialState = {
    post: [],
    postLoading: false,
    postError: false,
    postSuccess: false,
    postMessage: "",
    allPosts: []
};


// Async Thunk Function
export const addPostData = createAsyncThunk('post/addPost', async (postData, thunkAPI) => {
    try {
        return await addPost(postData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.error || 'Something went wrong!');
    }
});

// export 

export const getFacebookPost = createAsyncThunk(
    'posts/getFacebookPost',
    async (_, thunkAPI) => {
      try {
        const posts = await getAllPosts();
        return posts;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error?.response?.data?.error || 'Posts not found!'
        );
      }
    }
  );
// Create Slice
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
                state.allPosts.push(action.payload); // Assuming you're adding a single post
            });
    }
});

export const { postReset } = postSlice.actions;
export default postSlice.reducer;
