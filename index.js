const express = require('express')
const app = express()


const normalisecode = require('./routes/normalisecode')

app.use(normalisecode)

app.get('/',(req,res)=>{
	res.send("welcome to Food Train API endpoint, to normalise a course code, make GET request to '/normalisecode' with code as query parameter, and the course code as value")
})


const PORT = process.env.PORT || 4500
app.listen(PORT, () => console.log(`Server running at ${PORT}`));