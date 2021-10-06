let normalizeCode=(code)=>{
	let codeObject ={}

	let ncDept = getDept(code)
	codeObject.Department = ncDept
	return codeObject

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