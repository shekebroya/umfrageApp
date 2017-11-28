const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/umfragen', requireLogin, (req, res) => {});
};
