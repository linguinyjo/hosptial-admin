const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const keys = require('../config/keys')

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
},
function(request, accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  
  process.nextTick(function () {
  console.log(profile.id)
    
    return done(null, profile);
  });
}
));