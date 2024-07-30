const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const dotenv = require('dotenv');
const User = require('../Models/users.js');
const { generateToken } = require('../utils/jwt'); 
dotenv.config();

var scopes = ['identify', 'email', 'guilds', 'guilds.join'];

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORDCLIENTID,
    clientSecret: process.env.DISCORDCLIENTSECRET,
    callbackURL: "http://localhost:3000/api/discord/redirect",
    scope: scopes
},
async function(accessToken, refreshToken, profile, cb) {
    try {
        let user = await User.findOne({ where: { discordid: profile.id } });
        if (!user) {
            user = await User.create({
                discordid: profile.id,
                username: profile.username,
                email: profile.email
            });
        }
        const token = generateToken(user);
        user.token = token;
        return cb(null, user);
    } catch (err) {
        console.error('Error in strategy:', err);
        return cb(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.userid); 
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
