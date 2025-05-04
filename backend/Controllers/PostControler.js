import asyncHandler from 'express-async-handler';
import { Post } from '../Models/postModel.js';

// Post Controller
export const postData = asyncHandler(async (req, res) => {
    const { caption, background } = req.body;
    const { user_id } = req.params;

    // Validate input
    if (!caption ) {
        return res.status(400).json({ error: 'Caption, background, and user_id are required!' });
    }

    // Create new post
    const newPost = await Post.create({
        caption,
        background,
        user_id
    });

    res.status(200).send(newPost);
});



export const getPost = asyncHandler(async(req,res)=>{

    const allPost = await Post.find().sort({createdAt:-1});

res.status(200).json(allPost);


})