var mongoose = require('mongoose')

const Patient = mongoose.model('patients')

module.exports = app => {
  app.get('/api/show_all', (req, res) => {
    Patient.find({}, (err, something) => {
      res.send(something)
    })
  })
  app.get('/api/show_all_test', (req, res) => {
    Patient.update({}, 
      {
        $set: {
          "history": {}
        }
      }) 
  })

  app.get('/api/find_patient', (req, res) => {
    let queryString = []
    for(let key in req.query) {
      if(req.query[key]) queryString.push({ [key]: req.query[key] })
    }
    Patient.find({ $and: queryString}, (err, something) => {
      res.send(something)
    }) 
  })

  app.post('/api/add_patient', (req, res) => {
    let newPatient = {}
    for(let key in req.body) {
      if(req.body[key]) newPatient[key] = req.body[key] 
    }
    new Patient(newPatient).save()
  })

  app.post('/api/edit_patient', async (req, res) => {
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

  app.get('/api/delete_patient', (req, res) => {
    let ptObj = {}
    req.query['nhs_number'] ? ptObj['nhs_number'] = req.query['nhs_number'] : ptObj[_id] = req.query._id
    Patient.findOneAndDelete(ptObj, (err, raw) => {
      console.log(raw)
      res.send(raw)
    }) 
  })
}