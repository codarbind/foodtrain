const express = require('express')
const router = express.Router()
const neededFunctions = require('../helperfunctions')

router.get('/coursecode/coursecodeobject/:coursecode',async (req,res)=>{
	let {coursecode} = req.params
		
	if(coursecode.length >=6 && coursecode.indexOf(' ') !== -1){
		await neededFunctions.normalizeCode(coursecode)
		res.status(200).json(responseObject)
	}else{
		res.status(400).json({'errorMessage':'that is not a valid course code'})
	}

})

router.get('/coursecode/coursecodeobject',async (req,res)=>{
	res.status(400).json({'errorMessage':"kindly make a GET request: /coursecode/coursecodeobject/${coursecode} "})
})

module.exports = router