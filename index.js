const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

const app = express();

app.use(
  cookieSession({
    // 30 Tage
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// verbinde mongoose mit mongoDB
mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);

// Routes for production Online
if (process.env.NODE_ENV) {
  // main.js und main.css werden übergeben
  app.use(express.static('client/build'));

  // routes wie /umfragen,  umfragen/neue-umfrage; ... werden übergeben
  // ansonsten würde man immer auf index.html landen
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT);
