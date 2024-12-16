const Blog = require('../models/blog');

// Fetch all blogs
const blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json(result); // Send blogs as JSON
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch blogs' });
    });
};

// Create a new blog
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then((result) => {
      res.status(201).json(result); // Respond with created blog
    })
    .catch((err) => {
      res.status(400).json({ error: 'Failed to create blog' });
    });
};

// Fetch a specific blog
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      if (result) {
        res.status(200).json(result); // Respond with blog details
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch blog details' });
    });
};

// Delete a blog
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: 'Blog deleted successfully' });
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to delete blog' });
    });
};

module.exports = {
  blog_index,
  blog_create_post,
  blog_details,
  blog_delete,
};