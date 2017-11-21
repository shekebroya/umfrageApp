const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refeshToken, profile, done) => {
      //console.log('accessToken: ', accessToken);
      //console.log('refeshToken: ', refeshToken);
      //console.log('profile: ', profile);
      //console.log('done: ', done);
      User.findOne({ googleId.profile.id }).then(existingUser => {
        if(existingUser) {

        }else {
            new User({ googleId: profile.id }).save();
        }
      })
    }
  )
);
