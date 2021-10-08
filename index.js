const express = require('express')
const app = express()


const normalisecode = require('./routes/normalisecode')

app.use(normalisecode)


const PORT = 4500
app.listen(PORT,console.log('app running on ',PORT))