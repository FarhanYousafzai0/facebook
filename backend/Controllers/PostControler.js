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
    const { emoji } = req.body;
  
    const findPost = await Post.findById(post_id);
  
    if (!findPost) {
      return res.status(404).json({ error: "Post not found" });
    }
  
    const checkPost = findPost.likes.find((item) => item.id == user_id);
  
    if (!checkPost) {
      // Add new reaction
      findPost.likes.push({ type: emoji, id: user_id });
    } else if (checkPost.type === emoji) {
      // Remove reaction (toggle off)
      findPost.likes = findPost.likes.filter((item) => item.id !== user_id);
    } else {
      // Change reaction
      checkPost.type = emoji;
    }
  
    await findPost.save(); // 🔥 this was missing!
  
    res.status(200).json(findPost);
  });
  


// Geting all the reactions ,store in the mongoDb to show on Client server:
export const getAllReactions = asyncHandler(async (req, res) => {
  const { post_id } = req.params;

  const findPost = await Post.findById(post_id);
  if (!findPost) {
    return res.status(404).json({ message: "Post not found." });
  }

  const countReactions = {};

  // Count each reaction type
  findPost.likes.forEach((reaction) => {
    if (reaction.type) {
      countReactions[reaction.type] = (countReactions[reaction.type] || 0) + 1;
    }
  });

  // Sort them by frequency
  const sortedReactions = Object.entries(countReactions)
    .sort((a, b) => b[1] - a[1]) // descending order
    .map(([type, count]) => ({ type, count }));

  // Send both full list and summary
  res.status(200).json({
    count: findPost.likes.length,
    likes: findPost.likes,
    reactionSummary: sortedReactions
  });
});




export const addComments = async(req,res)=>{

  const {post_id} = req.params
  const {user_id} = req.user.id
  const {comment} = res.body

  const findPost = await Post.findById(post_id);

  if(!findPost){
    res.status(401).json({message:"Post Not Found"});
  }

  findPost.comments.push({user:req.user,comment});
  res.save(findPost);
  res.send(findPost);


}