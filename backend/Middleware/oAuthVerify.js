const isLoggedin = async (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
};
module.exports = isLoggedin;