import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  background: {
    type: Object,
    startColor: {
      type: String,
     
      default: '#ffffff',
    },
    endColor: {
      type: String,
     
      default: '#ffffff',
    }
  },
  image: {
    type: String,
    default:''
   
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true,
});

export const Post = mongoose.model('Post', postSchema);
