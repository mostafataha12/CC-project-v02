import express from 'express';
import { Blog } from '../models/blog.model';
import { auth, adminAuth } from '../middleware/auth.middleware';

const router = express.Router();

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate('author', 'name email')
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog posts' });
  }
});

// Get single blog post
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'name email');
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog post' });
  }
});

// Create blog post (admin only)
router.post('/', adminAuth, async (req: any, res) => {
  try {
    const { title, content, tags, imageUrl } = req.body;
    
    const blog = new Blog({
      title,
      content,
      author: req.user._id,
      tags,
      imageUrl
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post' });
  }
});

// Update blog post (admin only)
router.put('/:id', adminAuth, async (req: any, res) => {
  try {
    const { title, content, tags, imageUrl } = req.body;
    
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.tags = tags || blog.tags;
    blog.imageUrl = imageUrl || blog.imageUrl;

    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post' });
  }
});

// Delete blog post (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    await blog.deleteOne();
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post' });
  }
});

export default router; 