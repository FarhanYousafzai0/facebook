import express from 'express'
import { login, logout, signup } from '../Controllers/authControler';

const router = express.Router()

// Sign-Up
router.post('/signup',signup)


// Login


router.post('/login',login);


// Logout

router.post('/logout',logout);


export default router