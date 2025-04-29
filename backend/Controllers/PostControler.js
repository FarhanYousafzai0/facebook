import asyncHandler from 'express-async-handler';
import { Post } from '../Models/postModel.js';

// Post Controller
export const postData = asyncHandler(async (req, res) => {
    const { caption, background } = req.body;
    const { user_id } = req.params;

    // Validate input
    if (!caption || !background || !user_id) {
        return res.status(400).json({ error: 'Caption, background, and user_id are required!' });
    }

    // Create new post
    const newPost = await Post.create({
        caption,
        background,
        image: background.image, // assuming image is inside background
        user_id
    });

    res.status(200).json({
        message: 'Post added successfully!',
        post: newPost
    });
});
