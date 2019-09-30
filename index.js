const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({ Hello: "there"})
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});