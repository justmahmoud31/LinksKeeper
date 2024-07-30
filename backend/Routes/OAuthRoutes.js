const express = require('express');
const passport = require('passport');
const router = express.Router();
router.get('/discord', passport.authenticate('discord'));
router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/login'
}), (req, res) => {
    if (req.user && req.user.token) {
        res.json({ token: req.user.token });
    } else {
        res.status(500).json({ message: 'Something went wrong. Token not generated.' });
    }
});

module.exports = router;
