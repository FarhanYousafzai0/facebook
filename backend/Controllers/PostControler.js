import asyncHandler from 'express-async-handler';
import { Post } from '../Models/postModel.js';
import mongoose from 'mongoose';

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



export const getPost = asyncHandler(async (req, res) => {
  const allPost = await Post.find()
    .populate('user_id', 'name profilePic')
    .sort({ createdAt: -1 });

  res.status(200).json(allPost);
});




// 👍 Add or toggle a reaction
export const makeReaction = async (req, res) => {
  const { post_id, user_id } = req.params;
  const { emoji } = req.body;

  try {
    // Find the post
    const findPost = await Post.findById(post_id);
    if (!findPost) {
      return res.status(404).send({ message: 'Post not found' });
    }

    // Find the index of the user's reaction
    const reactionIndex = findPost.likes.findIndex(item => item.id == user_id);

    if (reactionIndex === -1) {
      // If reaction doesn't exist, add it
      findPost.likes.push({ type: emoji, id: user_id,post_id });
      await findPost.save();
    } else {
      // If reaction exists, update it directly in the array
      findPost.likes[reactionIndex].type = emoji;
      await findPost.save();
    }

    // Save once after all modifications
    await findPost.save();
    res.send(findPost);

  } catch (error) {
    console.error('Error in makeReaction:', error);
    res.status(500).send({ message: 'Server error' });
  }
};


// 👍 Get all reactions + summary
export const getAllReactions = asyncHandler(async (req, res) => {
  const { post_id } = req.params;

  const findPost = await Post.findById(post_id);
  if (!findPost) {
    return res.status(404).json({ message: "Post not found." });
  }

  const countReactions = {};

  findPost.likes.forEach((reaction) => {
    if (reaction.reactionType) {
      countReactions[reaction.reactionType] = (countReactions[reaction.reactionType] || 0) + 1;
    }
  });

  const sortedReactions = Object.entries(countReactions)
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => ({ type, count }));

  res.status(200).json({
    count: findPost.likes.length,
    likes: findPost.likes,
    reactionSummary: sortedReactions,
  });
});






export const addComments = async (req, res) => {
  try {
    const { post_id } = req.params;
    const user_id = req.user.id; 
    const { comment } = req.body;

    const findPost = await Post.findById(post_id);

    if (!findPost) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    // Add the comment (structured correctly)
    findPost.comments.push({ user_id, comment, post_id });

    await findPost.save();

    return res.status(200).json(findPost);  // ✅ Return updated post or just the new comment
  } catch (error) {
    console.error('Error adding comment:', error);
    return res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

