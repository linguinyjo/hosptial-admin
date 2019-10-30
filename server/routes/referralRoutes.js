var mongoose = require('mongoose')
require('../services/genId')
require('../models/referrals')

const Referral = mongoose.model('referrals')
const Patient = mongoose.model('patients')

module.exports = app => {
  
  app.post('/api/add_referral', async (req, res) => {
    let uniqueId = generateId()
    let newReferral = {
      _uniqueId: uniqueId
    }

    for(let key in req.body) {
      if(req.body[key]) newReferral[key] = req.body[key] 
    }
    new Referral(newReferral).save()
    const currentPatient = await Patient.findOne({ nhs_number: req.body['nhs_number'] })
    currentPatient[history].uniqueId =  newReferral
  })
}