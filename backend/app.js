const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes.js');
const cors = require('cors');
require('dotenv').config();

const app = express();

// MongoDB connection
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI)
  .then(() => app.listen(4000, () => console.log("Server running on port 4000")))
  .catch((err) => console.log(err));

// Middleware
app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // For parsing application/json (body of API requests)
app.use(cors()); // Enabling CORS for React frontend

// Routes
app.use('/blogs', blogRoutes); // Routes for blog operations

// Catch-all route for handling 404 errors (if needed)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});