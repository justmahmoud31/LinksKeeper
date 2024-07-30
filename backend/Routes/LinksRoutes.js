const express = require('express');
const router = express.Router();
const isLoggedin = require('../Middleware/oAuthVerify.js');
const { getAllLinks,addLink,getUsersLinks } = require('../Controllers/LinksController.js');  
router.get('/', getAllLinks);
router.post('/addlink/:userid',addLink);
router.get('/auth-link', (req, res) => res.send("<a href='http://localhost:3000/api/discord/redirect'>Auth with Discord</a>"));
router.get('/userslinks/:userid',isLoggedin,getUsersLinks);
module.exports = router;
