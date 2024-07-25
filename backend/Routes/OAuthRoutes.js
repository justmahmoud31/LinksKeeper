// Routes/OAuthRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const oAuthController = require('../Controllers/oAuthController.js');

// Include the scope parameter here
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
}));

module.exports = router;
