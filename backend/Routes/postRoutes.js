import express from 'express'
import { postData } from '../Controllers/PostControler.js';

export const postRouter = express.Router();
postRouter.post('addPost/:user_id',postData);