if (process.env.NODE_ENV === 'production') {
  // prod production domain: https://arcane-river-96772.herokuapp.com/
  module.exports = require('./prod');
} else {
  // dev development localhost:8000
  module.exports = require('./dev');
}
