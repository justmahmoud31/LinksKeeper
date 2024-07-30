const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../Middleware/auth.js');
const { addDirectory } = require('../Controllers/categoryController.js');
router.post('/addcategory/:userid', authenticateToken, addDirectory);
module.exports = router;
