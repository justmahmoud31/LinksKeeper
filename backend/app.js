const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const sequelize = require('./Config/db.js');

// Load environment variables
dotenv.config();

// Ensure the Discord strategy file is required and executed before using the routes
require('./Auth/Oauth.js'); // Make sure the path to your strategy file is correct

const authRoutes = require('./Routes/OAuthRoutes.js');

const app = express();

// Initialize Sequelize
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.DISCORDCLIENTSECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
