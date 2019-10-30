var mongoose = require('mongoose')

var referralSchema = new mongoose.Schema({ 
  id: String,
  date: String,
  speciality: String,
  urgency: String,
  origin: String,
  nhs_number: String
})

mongoose.model('referrals', referralSchema)