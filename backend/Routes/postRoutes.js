import express from 'express'
import { addComments, getAllReactions, getPost, makeReactions, postData } from '../Controllers/PostControler.js';

export const postRouter = express.Router();
// Add Posts
postRouter.post('/addPost/:user_id',postData);

// Get Posts:

postRouter.get('/get-all-posts',getPost);

//Make- reaction:
postRouter.post('/make-reactions/:post_id/:user_id',makeReactions)

// Get-post-Reactions:

postRouter.get('/get-reactions/:post_id',getAllReactions);



// Add Comments:

postRouter.post('/add-comments',addComments);



