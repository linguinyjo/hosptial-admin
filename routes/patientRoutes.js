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
    console.log(newPatient)
    new Patient(newPatient).save()
  })
}