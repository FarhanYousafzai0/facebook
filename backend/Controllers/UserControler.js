import asyncHanlder from 'express-async-handler'
import mongoose from 'mongoose'





// Register:
export const register = asyncHanlder(async(req,res)=>{
const {name,username,email,password,gender} = req.body

if(!name || !username || !email || !password || !gender){
    res.status(400).json({error:"Please enter all the fields!"})
}
  
 




})





// Login:





// Logout