

let normalizeCode=(code)=>{
	let codeObject ={}

	let ncDept = getDept(code)
	codeObject.Department = ncDept

	let ncCourseNumber = getCourseNumber(code, ncDept)
	codeObject.courseNumber = ncCourseNumber.courseNumber

	let {yearAndSemCode}  = ncCourseNumber


	return codeObject

}

let getYearAndSemester =()=>{

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

let getDept = (code)=>{
		let dept = ''
		for (let i = 0; i <= code.length - 1 ; i++) {
		let char = code[i]
		if(char.toLowerCase() == char.toUpperCase()){
			i = code.length + 1 //force the loop to stop,then call next function
		}else{
			dept += char			
		}
	}
	return dept
}