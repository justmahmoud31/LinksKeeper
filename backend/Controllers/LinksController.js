const getAllLinks = async (req, res) => {
    res.send('<h1>Welcome</h1><a href="/auth/google/callback">Authenticate with Google</a>');
};

module.exports = { getAllLinks };
