import express, { Router } from 'express'
import { register } from '../Controllers/UserControler.js'




const userRouter = express.Router()


// Register:
userRouter.post('/register',register)
// Login:



// Lougout:




export default userRouter