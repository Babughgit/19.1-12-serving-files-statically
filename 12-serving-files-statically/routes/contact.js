const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

// GET request to render the Contact Us form
router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

// POST request to handle form submission
router.post('/contactus', (req, res, next) => {
    console.log('Form data received:', req.body);
    res.redirect('/success');
});

// GET request to render the success page
router.get('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;
