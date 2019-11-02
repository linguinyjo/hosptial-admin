const express = require('express')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
var mongoose = require('mongoose')
//require('dotenv').config()
require('./services/passport')
require('./models/users')

const mongo = keys.mongoURI || mongoURI
const cookie = keys.cookieKey || cookieKey

mongoose.connect(mongo, {useNewUrlParser: true})

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(cookieSession({ 
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [cookie] 
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/patientRoutes')(app)
require('./routes/referralRoutes')(app)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});