const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const sequelize = require('./Config/db.js');
const authRoutes = require('./Routes/OAuthRoutes.js');
const linksRoutes = require('./Routes/LinksRoutes.js');
const categoryRoutes = require('./Routes/categoryRoutes.js');
dotenv.config();
require('./Auth/Oauth.js'); 

const app = express();
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.DISCORDCLIENTSECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', authRoutes);
app.use('/api/category',categoryRoutes);
app.use('/',linksRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
