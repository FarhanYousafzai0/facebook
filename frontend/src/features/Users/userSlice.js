import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser, verifyOtp } from "./userService";

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

// Async thunk for login user:
export const loginUserData = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await loginUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Something went wrong!"
      );
    }
  }
);
// otp Verify:

export const otpVerifyData = createAsyncThunk('otpverification',async(otpData,thunkAPI)=>{

  try {
    return await verifyOtp(otpData)
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.error);
  }
})







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
      // REGISTER
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
      })

      // LOGIN
      .addCase(loginUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.isError = false;
      })
      .addCase(loginUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.user = null;
      })

      // OTP VERIFY
      .addCase(otpVerifyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otpVerifyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.isError = false;
      })
      .addCase(otpVerifyData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
}

});

export const { userReset } = userSlice.actions;
export default userSlice.reducer;
