import asyncHandler from 'express-async-handler'
import { post } from '../Models/postModel.js'


// Post-Controller:

export const postData = asyncHandler(async(req,res)=>{

    const {caption,background} = req.body
    const {user_id} = req.params

// Checked if the user enter the values or not:
if(!caption){

    res.status(400).json({error:'Caption is empty!'})
}


const newPost = await post.create({
    caption,
    background,
    user_id
})

res.status(200).json({message:'Post added sucessfull!'},
    newPost
)
})