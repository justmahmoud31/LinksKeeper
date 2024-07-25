// Controllers/oAuthController.js
const passport = require('passport')
const Register = async (req, res) => {
    res.send('<a href="/auth/google">auth with Google</a>');
};
const authenticate = (
    passport.authenticate('google', { scope: ['email', 'profile'] })
);
const authenticateStatus = (
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure'
    })
);
const failureAuthenticate = async (req, res) => {
    res.send("<center><h1>Failed</h1></center>");
};
const successAuthenticate = async (req, res) => {
    res.send("<center><h1>Welcome</h1></center>");
}
module.exports = { Register, authenticate, authenticateStatus, failureAuthenticate, successAuthenticate };
