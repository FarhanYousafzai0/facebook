import axios from "axios";

// Base URL for the API
const BASE_URL = "http://localhost:8000/api/user/";

// Save user data to local storage
const saveUserData = async (userData) => {
  if (userData) {
    localStorage.setItem("user", JSON.stringify(userData));
  }
};

// Register User
export const registerUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}register`, userData);
  saveUserData(response.data);
  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}login`, userData);
  saveUserData(response.data);
  return response.data;
};

// OTP Verify
export const verifyOtp = async (otpData) => {
  const response = await axios.post(`${BASE_URL}verifyOtp/${otpData?.id}`, otpData);
  return response.data;
};

// Get all users
export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}get-all-users`);
  return response.data;
};
