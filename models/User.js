const mongoose = require('mongoose');
// mongoose Object hat ein property namens Schema nim Schema und ordne es dem variable Schema zu.
const { Schema } = mongoose;

const userSchema = new Schema({
  // alle user haben einen google-id als string
  googleId: String
});
// erstelle eine kollektion von users
mongoose.model('users', userSchema);
