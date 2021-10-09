const express = require('express')
const router = express.Router()
const neededFunctions = require('../helperfunctions')

router.get('/normalisecode',async (req,res)=>{

	let {code} = req.query
	console.log(code)
	if(!code) return res.json({'errorMessage':"kindly call with course code: \'code\' as query parameter"})
	let responseObject = (code.length >=6 && code.indexOf(' ') !== -1)? await neededFunctions.normalizeCode(code): {'errorMessage':'that is not a valid course code'}
	
	res.json(responseObject)

	
})

module.exports = router