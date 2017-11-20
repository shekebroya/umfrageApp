const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refeshToken, profile, done) => {
      console.log('accessToken: ', accessToken);
      console.log('refeshToken: ', refeshToken);
      console.log('profile: ', profile);
      console.log('done: ', done);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 8000;
app.listen(PORT);
