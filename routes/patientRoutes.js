var mongoose = require('mongoose')
const keys = require('../config/keys')

module.exports = app => {
  app.get('/api/find_patient', (req, res) => {
    const mymodel = (mongoose.model('patients'))
    mymodel.find({}, (err, something) => {
      res.send(something)
    }) 
  })

}