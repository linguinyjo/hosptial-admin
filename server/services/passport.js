const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
//const keys = require('../config/keys')
var mongoose = require('mongoose')
require('../models/users')
require('../models/patients')

//const gClientId =  keys.googleClientId || googleClientId
//const gClientSecret = keys.googleClientSecret || googleClientSecret
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => done(null, user))
});

passport.use(new GoogleStrategy({
  clientID: googleClientId,
  clientSecret: googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
},
async (request, accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({googleId: profile.id})
  existingUser 
    ? done(null, existingUser)
    : await done(null, new User({ googleId: profile.id }).save())
}
));

