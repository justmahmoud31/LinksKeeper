const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/discord', passport.authenticate('discord'));
router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/login',
    successRedirect: '/'
}));

module.exports = router;
