const express = require('express')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')

require('./services/passport')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(cookieSession({ 
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey] 
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});