import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import user from '../Models/UserModel.js';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';

// Register:
export const register = asyncHandler(async (req, res) => {

    const generateOtp = () => {
        return Math.floor(Math.random() * 1000000); // ✅ Fixed OTP generation
    };

    const { name, username, email, password, gender } = req.body;

    if (!name || !username || !email || !password || !gender) {
        return res.status(400).json({ error: "Please enter all the fields!" });
    }

    const existingUser = await user.findOne({ username });
    const existingEmail = await user.findOne({ email });

    if (existingUser) {
        return res.status(401).json({ error: "Username already exists!" });
    }
    if (existingEmail) {
        return res.status(401).json({ error: "Email already exists!" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const hashPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOtp(); // ✅ Added this to fix undefined OTP issue

    const newUser = await user.create({
        name,
        username,
        email,
        password: hashPassword,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        otp
    });

    res.status(201).json({
        message: "User registered successfully!",
        user: newUser
    });

    // Sending OTP
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_MAIL,  // ✅ Fixed incorrect variable placement
            pass: process.env.MAIL_PASS   // ✅ Fixed incorrect variable placement
        }
    });

    // Mail Options
    const mailOptions = {
        from: process.env.USER_MAIL,
        to: email,
        subject: "OTP Verification",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OTP Verification</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0;">
            <div style="max-width: 500px; margin: 50px auto; background-color: #ffffff; border-radius: 15px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); overflow: hidden;">
                
                <div style="background-color: #0F9E99; color: #fff; text-align: center; padding: 20px;">
                    <h1 style="margin: 0; font-size: 28px;">🔒 OTP Verification</h1>
                </div>

                <div style="padding: 40px 20px; text-align: center;">
                    <p style="font-size: 16px; color: #555;">Use the OTP below to verify your email:</p>
                    <div style="
                        display: inline-block; 
                        background-color: #0F9E99; 
                        color: #ffffff; 
                        font-weight: bold; 
                        font-size: 32px; 
                        padding: 15px 40px; 
                        border-radius: 10px; 
                        letter-spacing: 5px;
                        margin-top: 10px;
                    ">
                        ${otp}
                    </div>

                    <p style="margin-top: 20px; color: #888;">This OTP is valid for <b>10 minutes</b>. Please do not share it with anyone.</p>
                </div>

                <div style="background-color: #EFE9E0; text-align: center; padding: 10px;">
                    <p style="margin: 0; color: #666; font-size: 12px;">&copy; 2025 LMS Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
        `
    };

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(`Error sending OTP: ${error.message}`);
        } else {
            console.log(`OTP ${otp} sent successfully!`);
        }
    });
});



// Login:


export const login = asyncHandler(async(req,res)=>{

    const {username,password} = req.body


if(!username || !password){
res.status(401).json({error:"Please fill both fields!"})
}

const user = await user.findOne({username});
const isCorrectPassowrd = await bcrypt.compare(password,user?.password);

if(!user){
    res.status(400).json({error:"User not found!"})
}
if(!isCorrectPassowrd){
    res.status(400).json({error:"Invalied password!"})
}







});