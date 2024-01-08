const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import routers
const authRouter = require('./auth');
const forumRouter = require('./forum');
const blogRouter = require('./blog');
const resourcesRouter = require('./resources');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/programmingEducation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', authRouter);
app.use('/forum', forumRouter);
app.use('/blog', blogRouter);
app.use('/resources', resourcesRouter);

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/software', (req, res) => {
  res.sendFile(path.join(__dirname, 'software.html'));
});

// ... (other HTML page routes)

// Catch-all for React/Angular apps
app.get('/app/*', (req, res) => {
  // Determine which app to serve based on some logic or configuration
  const appPath = (useReactApp ? 'react-app/build' : 'angular-app/dist/angular-app');
  res.sendFile(path.join(__dirname, appPath, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
