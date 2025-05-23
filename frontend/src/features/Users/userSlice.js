import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, verifyOtp, getUsers } from "./userService";

// Initial state - check if user is in localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: storedUser || null,  // Load user data from localStorage if available
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  allUsers :[]
};

// Register User Async Thunk
export const registerUserData = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      
      return await registerUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong!");
    }
  }
);

// Login User Async Thunk
export const loginUserData = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      return await loginUser(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong!");
    }
  }
);

// OTP Verification Async Thunk
export const otpVerifyData = createAsyncThunk(
  "auth/otpVerification",
  async (otpData, thunkAPI) => {
    try {
      const response = await verifyOtp(otpData);  // API call for OTP verification
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || "OTP verification failed!");
    }
  }
);


// Get all users:


export const getAllUserData = createAsyncThunk("User-Data",async(_,thunkAPI)=>{


  try {
    return await getUsers();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reponse.data?.error || "Somethin went Wrong!");
  }
})

// Slice definition
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // This action will handle logging out the user
    logoutUser: (state) => {
      state.user = null;  // Remove user from Redux state
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      localStorage.removeItem("user");  // Remove user data from localStorage
    },

    // Reset state when necessary
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
        state.user = action.payload;
        state.message = "Registration successful!";
      })
      .addCase(registerUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      

      // Get all users:
 .addCase(getAllUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allUsers = action.payload;
        state.message = "Registration successful!";
      })
      .addCase(getAllUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       
      })


      // Similar for login and OTP verification
      .addCase(loginUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.message = "Login successful!";
      })
      .addCase(loginUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(otpVerifyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otpVerifyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(otpVerifyData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { logoutUser, userReset } = userSlice.actions;
export default userSlice.reducer;
