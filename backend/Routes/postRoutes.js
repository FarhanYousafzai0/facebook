import express from 'express'
import { getPost, postData } from '../Controllers/PostControler.js';

export const postRouter = express.Router();
// Add Posts
postRouter.post('/addPost/:user_id',postData);

// Get Posts:

postRouter.get('/get-all-posts',getPost);