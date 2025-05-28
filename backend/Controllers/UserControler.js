import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import user from '../Models/UserModel.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Register
export const register = asyncHandler(async (req, res) => {
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

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
  const otp = generateOtp();

  const newUser = await user.create({
    name,
    username,
    email,
    password: hashPassword,
    gender,
    profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    otp
  });

  // Send OTP Email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.USER_MAIL,
    to: email,
    subject: "OTP Verification",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; background: #fff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
        <h2 style="text-align: center; color: #0F9E99;">🔐 OTP Verification</h2>
        <p style="text-align: center;">Use the OTP below to verify your email:</p>
        <div style="font-size: 32px; font-weight: bold; color: #fff; background: #0F9E99; padding: 15px; text-align: center; border-radius: 8px; letter-spacing: 4px;">${otp}</div>
        <p style="text-align: center; margin-top: 20px;">This OTP is valid for <strong>10 minutes</strong>. Do not share it with anyone.</p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error sending OTP: ${error.message}`);
    } else {
      console.log(`OTP ${otp} sent successfully!`);
    }
  });

  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    username: newUser.username,
    email: newUser.email,
    gender: newUser.gender,
    profilePic: newUser.profilePic,
    token: generateToken(newUser._id)
  });
});

// OTP Verification
export const otpVerify = asyncHandler(async (req, res) => {
  const { otp } = req.body;
  const { user_id } = req.params;

  if (!otp) {
    return res.status(400).json({ error: "Please enter OTP!" });
  }

  if (!user_id || !mongoose.Types.ObjectId.isValid(user_id)) {
    return res.status(400).json({ error: "Invalid or missing user ID!" });
  }

  const findUser = await user.findById(user_id);

  if (!findUser) {
    return res.status(404).json({ error: "User not found!" });
  }

  if (findUser.otp == otp) {
    findUser.otp = null;
    await findUser.save();
    return res.status(200).json({ message: "OTP Verified", user: findUser });
  } else {
    return res.status(401).json({ error: "Invalid OTP" });
  }
});

// Login
export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Please fill both fields!" });
  }

  const foundUser = await user.findOne({ username });

  if (!foundUser) {
    return res.status(404).json({ error: "User not found!" });
  }

  const isCorrectPassword = await bcrypt.compare(password, foundUser.password);

  if (!isCorrectPassword) {
    return res.status(401).json({ error: "Invalid password!" });
  }

  res.status(200).json({
    _id: foundUser._id,
    name: foundUser.name,
    username: foundUser.username,
    email: foundUser.email,
    gender: foundUser.gender,
    profilePic: foundUser.profilePic,
    token: generateToken(foundUser._id)
  });
});




// Get all user:


export const getallUser = asyncHandler(async(req,res)=>{


const getUser = await user.find();


if(!getUser){
  res.status(400).json({message:"Users not found!"});
}

res.status(200).json(getUser);


})




// User info:


export const UserInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const userInfo = await user.findById(id);

  if (!userInfo) {
    return res.status(400).json({ message: "User not found" });
  }

  res.status(200).json(userInfo);
});