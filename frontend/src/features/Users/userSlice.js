import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, verifyOtp, getUsers, getUsersInfo } from "./userService";

// Initial state - check if user is in localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: storedUser || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  allUsers: [],
  myInfo :{}
};

// ✅ Register User
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

// ✅ Login User
export const loginUserData = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      return await loginUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong!");
    }
  }
);

// ✅ OTP Verification
export const otpVerifyData = createAsyncThunk(
  "auth/otpVerification",
  async (otpData, thunkAPI) => {
    try {
      return await verifyOtp(otpData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || "OTP verification failed!");
    }
  }
);

// ✅ Get All Users
export const getAllUserData = createAsyncThunk(
  "auth/getAllUsers",
  async (_, thunkAPI) => {
    try {
      return await getUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong!");
    }
  }
);



// Get-Users-info

export const UserInfoData = createAsyncThunk(
  'user-info',
  async (userInfo, thunkAPI) => {
    try {
      const data = await getUsersInfo(userInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.error || "Something went wrong"
      );
    }
  }
);

// ✅ Slice Definition
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      localStorage.removeItem("user");
    },
    userReset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // ✅ Register
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

      // ✅ Login
      .addCase(loginUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user || action.payload;
        state.message = "Login successful!";
      })
      .addCase(loginUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      // ✅ OTP
      .addCase(otpVerifyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otpVerifyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message || "OTP Verified!";
      })
      .addCase(otpVerifyData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // ✅ Get All Users
      .addCase(getAllUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allUsers = action.payload;
      })
      .addCase(getAllUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get-users:

      .addCase(UserInfoData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UserInfoData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.myInfo = action.payload;
      })
      .addCase(UserInfoData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { logoutUser, userReset } = userSlice.actions;
export default userSlice.reducer;
