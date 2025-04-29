import mongoose from 'mongoose'
import user from './UserModel.js'





const postSchema = mongoose.Schema({
    caption:{
        type:String,
        required:true,
    
    },
    background:{
        type:Object,

  startColor:{
    type:String,
    required:true,
     default: '#fff'
  },
  endColor:{
type:String,
required:true,
default:'#fff'
  },
  Image:{
    type:String,
    required:true
  },
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:user
  }

    }




},{timeStamps:true})


export const post = mongoose.model('post',postSchema)