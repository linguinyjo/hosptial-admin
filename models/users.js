var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({ 
  googleId: String 
})

mongoose.model('users', userSchema)