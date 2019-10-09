var mongoose = require('mongoose')

module.exports = app => {
  app.get('/api/find_patient', (req, res) => {
    const mymodel = (mongoose.model('patients'))
    let queryString = []
    for(let key in req.query) {
      if(req.query[key]) queryString.push({ [key]: req.query[key] })
    }
 
    mymodel.find({ $and: queryString}, (err, something) => {
      res.send(something)
    }) 
  })

  app.get('/api/show_all', (req, res) => {
    const mymodel = (mongoose.model('patients'))
    mymodel.find({}, (err, something) => {
      res.send(something)
    }) 
  })
}