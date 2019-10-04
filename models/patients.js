var mongoose = require('mongoose')

var patientSchema = new mongoose.Schema({ 
  first_name: String,
  last_name: String,
  gender: String,
  dob: String,
  email_address: String,
  nhs_number: String
})

mongoose.model('patients', patientSchema)