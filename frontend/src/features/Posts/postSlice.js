import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addComments, addPost, AddReactions, getallPost } from './postService';

// Initial State
const initialState = {
  post: [],
  postLoading: false,
  postError: false,
  postSuccess: false,
  postMessage: "",
  
  reactions: [],
  reactionLoading: false,      // fixed typo
  reactionSuccess: false,
  reactionError: false,
  reactionMessage: "",         // changed to string
  
  commentLoading: false,
  commentError: false,
  commentSuccess: false,
  commentMessage: ""
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
      const posts = await getallPost();
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.error || 'Posts not found!'
      );
    }
  }
);

// Add Reactions:
export const addReactionsData = createAsyncThunk(
  'add-Reactions',
  async (addReactionsData, thunkAPI) => {
    try {
      return await AddReactions(addReactionsData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || 'Something went wrong. Kindly check.'
      );
    }
  }
);

// Add Comments:
export const addCommentsData = createAsyncThunk(
  'comments/add',
  async (addComment, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth?.user?.token;
      return await addComments(addComment, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Failed to add comment"
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

      state.reactionError = false;
      state.reactionLoading = false;
      state.reactionSuccess = false;
      state.reactionMessage = "";

      state.commentError = false;
      state.commentLoading = false;
      state.commentSuccess = false;
      state.commentMessage = "";
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
        state.reactionLoading = true;
      })
      .addCase(addReactionsData.rejected, (state, action) => {
        state.reactionLoading = false;
        state.reactionError = true;
        state.reactionMessage = action.payload;
      })
    .addCase(addReactionsData.fulfilled, (state, action) => {
  console.log(action.payload)
state.post = state.post.map((item, index) => {
  if (item._id === action.payload.post_id) {
    return {
      ...item,
      likes: action.payload.likes,
    };
  }
  return item;
});

 
})


      // Add Comments:
      .addCase(addCommentsData.pending, (state) => {
        state.commentLoading = true;
      })
      .addCase(addCommentsData.rejected, (state, action) => {
        state.commentLoading = false;
        state.commentError = true;
        state.commentMessage = action.payload;
      })
      .addCase(addCommentsData.fulfilled, (state, action) => {
        state.commentSuccess = true;
        state.commentLoading = false;

        state.post = state.post.map(item => {
          if (item._id === action.payload.comments[0].post_id) {
            return {
              ...item,
              comments: action.payload.comments,
            };
          }
          return item;
        });
      });
  },
});

export const { postReset } = postSlice.actions;
export default postSlice.reducer;
