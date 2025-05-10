import express from 'express'
import { getPost, makeReactions, postData } from '../Controllers/PostControler.js';

export const postRouter = express.Router();
// Add Posts
postRouter.post('/addPost/:user_id',postData);

// Get Posts:

postRouter.get('/get-all-posts',getPost);

//Make- reaction:
postRouter.post('/make-reactions/:post_id/:user_id',makeReactions)