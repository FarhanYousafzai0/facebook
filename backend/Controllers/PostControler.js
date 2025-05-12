import asyncHandler from 'express-async-handler';
import { Post } from '../Models/postModel.js';

// Post Controller
export const postData = asyncHandler(async (req, res) => {
    const { caption, background,image } = req.body;
    const { user_id } = req.params;

 
    

    // Create new post
    const newPost = await Post.create({
        caption,
        background,
        user_id,
        image
    });

    res.status(200).send(newPost);
});



export const getPost = asyncHandler(async(req,res)=>{

    const allPost = await Post.find().sort({createdAt:-1});

res.status(200).json(allPost);


})


export const makeReactions = asyncHandler(async (req, res) => {
    const { post_id, user_id } = req.params;
    const { emojis } = req.body;
  
    const findPost = await Post.findById(post_id);
  
    if (!findPost) {
      return res.status(404).json({ error: "Post not found" });
    }
  
    const checkPost = findPost.likes.find((item) => item.id == user_id);
  
    if (!checkPost) {
      // Add new reaction
      findPost.likes.push({ type: emojis, id: user_id });
    } else if (checkPost.type === emojis) {
      // Remove reaction (toggle off)
      findPost.likes = findPost.likes.filter((item) => item.id !== user_id);
    } else {
      // Change reaction
      checkPost.type = emojis;
    }
  
    await findPost.save(); // 🔥 this was missing!
  
    res.status(200).json(findPost);
  });
  