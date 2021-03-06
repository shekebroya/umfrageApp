const passport = require('passport');
// Strategy "passport-google-oauth20" kann ausgewechselt werden mit z.B. facebook, github, ...
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// User = modelClass mit einem collection von user namens users
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  // Strategy kann ausgewechselt werden mit z.B. facebook, github, ...
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true // wichtig für https://
    },
    async (accessToken, refeshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleId: profile.id
      });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        firstname: profile.displayName,
        gender: profile.gender,
        picture: profile.picture,
        emails: profile.emails
      }).save();
      done(null, user);
    }
  )
);
