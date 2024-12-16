const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: 'string',
    required: true
  },
  snippet: {
    type: 'string',
    required: true
  },
  body: {
    type: 'string',
    required: true
  }
}, { timestamps: true});

const Blog = mongoose.model('Blogs', blogSchema);
module.exports = Blog;