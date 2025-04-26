import express, { Router } from 'express'
import { login, otpVerify, register } from '../Controllers/UserControler.js'




const userRouter = express.Router()


// Register:
userRouter.post('/register',register)
// Login:

userRouter.post('/login',login);

// Lougout:




// Otp Verify:

userRouter.post('/verifyOtp/:user_id', otpVerify);

export default userRouter