
const mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
  type: String,
  required: true,
  minlength: 1,
  default: null,
  trim: true
  },
  email: {
    type: String,
    trim: true,
    minlength: 5,
    default: "user@user.com"
  },

})

module.exports = {
  User
}
