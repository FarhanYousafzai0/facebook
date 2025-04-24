import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "./userService";

// Check if user is logged in:
const isUser = JSON.parse(localStorage.getItem("user")) || null;

// Initial state:
const initialState = {
  user: isUser,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  allUsers: [],
};

// Async thunk for register user:
export const registerUserData = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      return await registerUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Something went wrong!"
      );
    }
  }
);

// User slice:
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.isError = false;
      })
      .addCase(registerUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { userReset } = userSlice.actions;
export default userSlice.reducer;
