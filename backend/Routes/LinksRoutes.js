// Routes/LinksRoutes.js
const express = require('express');
const router = express.Router();
const { getAllLinks } = require('../Controllers/LinksController.js');  // Destructure the function
router.get('/', getAllLinks);
module.exports = router;
