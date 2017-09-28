const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

var password = 'pramudit123'

bcrypt.genSalt(10,(err,salt) => {
  bcrypt.hash(password,salt, (err,hash) => {
    console.log(hash);
  })
})

var hashedPassword = '$2a$10$yskrGUZrJQ6SzhOS78uiYu/uODfaxarg7NSw1fzCUGFucC/HqX6sy'

bcrypt.compare(password,hashedPassword,(err, res) => {
  console.log(res);
})
