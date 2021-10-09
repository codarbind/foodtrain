 function normalizeCode(code){
	try {
		let codeObject ={}
	
		let ncDept = getCharBlock(code)
		codeObject.Department = ncDept
	
		let ncCourseNumber = getCourseNumber(code, ncDept)
		codeObject.courseNumber = ncCourseNumber.courseNumber
	
		let {yearAndSemCode}  = ncCourseNumber
	
		let ncYearAndSem = getYearAndSemester(yearAndSemCode)
		codeObject.year = ncYearAndSem.year
		codeObject.semester = ncYearAndSem.semester
	
		return codeObject
	}catch(e){
		return {'errorMessage':'there is an error with the input'}
	}

}


let getYearAndSemester =(yearAndSemCode)=>{
	yearAndSemCode = yearAndSemCode.trim()
	if(isNaN(parseFloat(yearAndSemCode[0]))){
		//then it is a character, indicating semester
		let semester = getCharBlock(yearAndSemCode)
		let year = yearAndSemCode.slice(semester.length).trim()
		year = (year.length == 2)? `20${year}`: year
		if(semester.length < 3 ){ semester = fullSemester(semester)}
		return {semester,year}
	}else{
		//it is a number
		let semester = getCharBlockReverse(yearAndSemCode)
		let year = yearAndSemCode.slice(0, yearAndSemCode.length - semester.length).trim()
		year = (year.length == 2)? `20${year}`: year
		if(semester.length < 3 ){ semester = fullSemester(semester) }
		return {semester,year}

	}

}

let fullSemester=(semester)=>{
	semester =	semester.toLowerCase()

	switch(semester){

    case 'f' : semester = 'Fall'
    break
    case 'w' : semester = 'Winter'
    break
    case 's' : semester = 'Spring'
    break
    case 'su' : semester = 'Summer'

}
return semester
}


let getCourseNumber =(code, ncDept)=>{
	 let lengthOfCourseCode = ncDept.length
	 let leftCode = code.slice(lengthOfCourseCode)


	 if(isNaN(parseFloat(leftCode[0]))){
	 	//then it is delimiter, cut it
	 	leftCode = leftCode.slice(1)
	 	let indexOfSpace = leftCode.indexOf(' ')
	 	let courseNumber  = leftCode.slice(0,indexOfSpace)
	 	let yearAndSemCode = leftCode.slice(indexOfSpace)
	 	return {courseNumber, yearAndSemCode}
	 }else{
	 	//do not cut it
	 	let indexOfSpace = leftCode.indexOf(' ')
	 	let courseNumber = leftCode.slice(0,indexOfSpace)
	 	let yearAndSemCode = leftCode.slice(indexOfSpace)
	 	return {courseNumber, yearAndSemCode}
	 }

}

let getCharBlock = (code)=>{
		let output = ''
		for (let i = 0; i <= code.length - 1 ; i++) {
		let char = code[i]
		if(char.toLowerCase() == char.toUpperCase()){
			i = code.length + 1 //force the loop to stop,then call next function
		}else{
			output += char			
		}
	}
	return output
}


let getCharBlockReverse = (code)=>{
		let output = ''
		for (let i = code.length - 1; i >= 0 ; i--) {
		let char = code[i]
		if(char.toLowerCase() == char.toUpperCase()){
			i = -1 //force the loop to stop,then call next function
		}else{
			output += char			
		}
	}
	output = output.split('').reverse().join('')
	return output
}

module.exports = {normalizeCode}