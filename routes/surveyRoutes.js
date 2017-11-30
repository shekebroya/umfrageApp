const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/umfragen', requireLogin, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
