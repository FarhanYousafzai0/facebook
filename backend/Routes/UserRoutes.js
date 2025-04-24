import express, { Router } from 'express'
import { login, register } from '../Controllers/UserControler.js'




const userRouter = express.Router()


// Register:
userRouter.post('/register',register)
// Login:

userRouter.post('/login',login);

// Lougout:




export default userRouter