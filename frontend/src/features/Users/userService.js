import axios from "axios";
import { use } from "react";


//  Base url for the API
const BASE_URL = "http://localhost:5000/api/users/";


// Save user data to local storage
const saveUserData = async (userData)=>{
    if(userData){
        localStorage.setItem("user",JSON.stringify(userData));
    }
}


// Register User:
export const registerUser = async(userData)=>{
    const response = await axios.post(`${BASE_URL}register`,userData);
    saveUserData(response.data);
    return response.data;
}


// Login User: