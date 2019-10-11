var mongoose = require('mongoose')

module.exports = app => {
  app.get('/api/show_all', (req, res) => {
    const Patient = (mongoose.model('patients'))
    Patient.find({}, (err, something) => {
      res.send(something)
    }) 
  })

  app.get('/api/find_patient', (req, res) => {
    const Patient = (mongoose.model('patients'))
    let queryString = []
    for(let key in req.query) {
      if(req.query[key]) queryString.push({ [key]: req.query[key] })
    }
    Patient.find({ $and: queryString}, (err, something) => {
      res.send(something)
    }) 
  })

  app.post('/api/add_patient', (req, res) => {
    const Patient = mongoose.model('patients')
    let newPatient = {}
    for(let key in req.body) {
      if(req.body[key]) newPatient[key] = req.body[key] 
    }
    new Patient(newPatient).save()
  })

  app.post('/api/edit_patient', async (req, res) => {
    const Patient = mongoose.model('patients')
    const currentPatient = await Patient.findOne({ nhs_number: req.body['nhs_number'] })
    let newDetails = {
      _id: currentPatient['_id']
    }
    for(let key in req.body) {
      newDetails[key] = req.body[key]
    }
    Patient.replaceOne(currentPatient, newDetails, (err, raw) => {
      if(err) console.log(err)
    })
  })
}