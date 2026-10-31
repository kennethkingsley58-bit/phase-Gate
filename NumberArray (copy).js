function reverse(number){
	let result = []
	
	for (let row of number){
		let newRow = [];
		
		for(let count = row.length -1; count >= 0; count--){
			newRow.push(row[count])
	}
	result.push(newRow)
}
	return result;
	
}

	let numbwr = [[1,2,3], [4,5,6], [7,8,9]]
	console.log(reverse(number))




