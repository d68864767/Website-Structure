const express = require('express');
const mongoose = require('mongoose');
const Resource = require('./models/resource'); // Assuming a Resource model is defined in the models directory

const router = express.Router();

// Middleware to handle file uploads if necessary
// const fileUploadMiddleware = require('./middleware/fileUpload');

// GET request to fetch all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find({});
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error });
  }
});

// POST request to add a new resource
router.post('/', /* fileUploadMiddleware, */ async (req, res) => {
  try {
    const { name, category, description, link, file } = req.body;
    // If file upload is implemented, file information would be in req.file or req.files
    const newResource = new Resource({ name, category, description, link /*, file: req.file.path */ });
    await newResource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: 'Error adding resource', error });
  }
});

// PUT request to update an existing resource
router.put('/:id', async (req, res) => {
  try {
    const { name, category, description, link } = req.body;
    const resource = await Resource.findByIdAndUpdate(req.params.id, { name, category, description, link }, { new: true });
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Error updating resource', error });
  }
});

// DELETE request to delete a resource
router.delete('/:id', async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.json({ message: 'Resource deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resource', error });
  }
});

module.exports = router;
