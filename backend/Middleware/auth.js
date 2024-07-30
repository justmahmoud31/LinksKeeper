const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    console.log('Headers:', req.headers);
    const authHeader = req.headers['authorization']; 
    console.log('Authorization Header:', authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log('Extracted Token:', token);
    if (token == null) return res.sendStatus(401); 
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        
        req.user = user; 
        next();
    });
};

module.exports = { authenticateToken };
