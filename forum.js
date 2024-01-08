const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Assuming a forum model file in the models directory
const Post = require('./models/post');
const Comment = require('./models/comment');

// Middleware to authenticate users
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Get all forum posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author').exec();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a single forum post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate('author').exec();
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new forum post
router.post('/', authenticateToken, async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user.userId, // Assuming the user ID is included in the JWT
    });

    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add a comment to a forum post
router.post('/:postId/comments', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    const comment = new Comment({
      content: req.body.content,
      author: req.user.userId, // Assuming the user ID is included in the JWT
      post: req.params.postId,
    });

    const newComment = await comment.save();
    post.comments.push(newComment._id);
    await post.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
