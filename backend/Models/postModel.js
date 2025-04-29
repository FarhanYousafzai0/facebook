import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  background: {
    startColor: {
      type: String,
      required: true,
      default: '#fff',
    },
    endColor: {
      type: String,
      required: true,
      default: '#fff',
    }
  },
  image: {
    type: String,
    required: true,
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
