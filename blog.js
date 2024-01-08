const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a schema for blog posts
const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  datePosted: { type: Date, default: Date.now },
  comments: [{ body: String, date: Date, author: String }]
});

// Create a model based on the schema
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// GET request to fetch all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ datePosted: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST request to create a new blog post
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  const newPost = new BlogPost({ title, content, author });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET request to fetch a single blog post by ID
router.get('/:id', getPost, (req, res) => {
  res.json(res.blogPost);
});

// DELETE request to delete a blog post by ID
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.blogPost.remove();
    res.json({ message: 'Deleted Blog Post' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a post by ID
async function getPost(req, res, next) {
  let blogPost;
  try {
    blogPost = await BlogPost.findById(req.params.id);
    if (blogPost == null) {
      return res.status(404).json({ message: 'Cannot find blog post' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.blogPost = blogPost;
  next();
}

module.exports = router;
