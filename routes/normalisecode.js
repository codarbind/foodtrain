const express = require('express')
const router = express.Router()
const neededFunctions = require('../helperfunctions')

router.get('/normalisecode',async (req,res)=>{

	let {code} = req.query
	let responseObject = await neededFunctions.normalizeCode(code)
	
	res.json(responseObject)

	
})

module.exports = router