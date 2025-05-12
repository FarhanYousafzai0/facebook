import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, AddReactions, getallPost } from './postService';


// Initial State
const initialState = {
    post: [],
    postLoading: false,
    postError: false,
    postSuccess: false,
    postMessage: "",
    reactions:[],
    reactionLaoding : false,
  reactionSuccess:false,
  reactionError:false,
  reactionMessage:false
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


// Add Reactions:

export const addReactionsData = createAsyncThunk('add-Reactions',async(addReactionsData,thunkAPI)=>{
try {
    
    return await AddReactions(addReactionsData)
} catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.error) || 'Something Went Wrong.Kindly Check.'
}
    
})




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
            state.reactionError = false;
            state.reactionLaoding = false;
            state.reactionSuccess = false;
            state.reactionMessage = "";
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
                state.post.unshift(action.payload);
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
            })

            // Add Reaction
            .addCase(addReactionsData.pending, (state) => {
                state.reactionLaoding = true;
            })
            .addCase(addReactionsData.rejected, (state, action) => {
                state.reactionLaoding = false;
                state.reactionError = true;
                state.reactionMessage = action.payload;
            })
            .addCase(addReactionsData.fulfilled, (state, action) => {
               
            });
    },
});


export const { postReset } = postSlice.actions;
export default postSlice.reducer;
