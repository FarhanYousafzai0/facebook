import express, { Router } from 'express'
import { getallUser, login, otpVerify, register } from '../Controllers/UserControler.js'




const userRouter = express.Router()


// Register:
userRouter.post('/register',register)
// Login:

userRouter.post('/login',login);

// Get all user:


userRouter.get('/get-all-users',getallUser);




// Otp Verify:

userRouter.post('/verifyOtp/:user_id', otpVerify);

export default userRouter