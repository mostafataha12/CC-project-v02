import mongoose from 'mongoose';

export interface IBlog extends mongoose.Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  tags: string[];
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  imageUrl: {
    type: String
  }
}, {
  timestamps: true
});

export const Blog = mongoose.model<IBlog>('Blog', blogSchema); 