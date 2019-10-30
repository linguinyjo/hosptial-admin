var mongoose = require('mongoose')

var patientSchema = new mongoose.Schema({ 
  first_name: String,
  last_name: String,
  gender: String,
  dob: String,
  email: String,
  nhs_number: String,
  history: {
    
  }
})

mongoose.model('patients', patientSchema)