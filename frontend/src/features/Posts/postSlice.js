import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPost } from './postService'



// InstialState:
const intialState = {
post : [],
postLoading: false,
postError:false,
postSuccess:false,
postMessage:"",
allPosts : []
}


// AsuyncThunkFunction:

const addPostData = createAsyncThunk('addPost',async(postData,thunkAPI)=>{
    try {
        return await addPost(postData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data?.error) || 'Somethink went Wrong!'
    }
})

// createSlice :


const postSlice = createSlice({
name:'post',
intialState,
reducers:{
   postReset:(state)=>{
    state.postError = false,
    state.postLoading = false,
    state.postMessage = ''
    state.postSuccess = false
   },
   
},
extraReducers:(builder)=>{
    builder.addCase(addPostData.pending,(state)=>{
        state.postLoading = true
    })
    .addCase(addPostData.rejected,(state,action)=>{
    state.postError = true
    state.postLoading = false
    state.postMessage = action.payload
    })
    .addCase(addPostData.fulfilled,(state,action)=>{
        state.postError = false
    state.postLoading = false
    state.postSuccess = true
    state.postMessage = action.payload
    state.allPosts = action.payload
    })
}


})


export const {postReset} = postSlice.actions
export default postSlice.reducer