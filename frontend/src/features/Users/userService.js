import axios from "axios";
import { use } from "react";


//  Base url for the API
const BASE_URL = "http://localhost:8000/api/user/";


// Save user data to local storage
const saveUserData = async (userData)=>{
    if(userData){
        localStorage.setItem("user",JSON.stringify(userData));
    }
}


// Register User:
export const registerUser = async(userData)=>{
    const response = await axios.post(`${BASE_URL}register`,userData);
        localStorage.setItem("user",JSON.stringify(response.data));
    return response.data;
}


// Login User:

export const loginUser = async(userData)=>{
const response = await axios.post(`${BASE_URL}login`,userData);
saveUserData(response.data);
return response.data;
}





// Otp verify :

export const verifyOtp = async (otpData) => {
    console.log(otpData)
    const response = await axios.post(`${BASE_URL}/verifyOtp/${otpData?.id}`, otpData);
    return response.data;
  }
  