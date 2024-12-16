const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController.js');

// Blog routes
router.get('/', blogController.blog_index); // Fetch and display all blogs
router.post('/', blogController.blog_create_post); // Create new blog post
router.get('/:id', blogController.blog_details); // View a specific blog post
router.delete('/:id', blogController.blog_delete); // Delete a blog post

module.exports = router;