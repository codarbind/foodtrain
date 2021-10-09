const express = require('express')
const app = express()


const normalisecode = require('./routes/normalisecode')

app.use(normalisecode)


const PORT = process.env.PORT || 4500
app.listen(PORT, () => console.log(`Server running at ${PORT}`));