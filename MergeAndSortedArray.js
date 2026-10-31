let firstNumber = [1,2,4]
let secondNumber = [1,3,4]

let merging = firstNumber + "," + secondNumber
console.log(merging)

let result = []
let index = 0
let count = 0

while (index <= firstNumber.length && count < secondNumber.length){

	if(firstNumber[index] <= secondNumber[count]){
	
		result.push(firstNumber[index])
		
				index++
	}
	else{
		result.push(secondNumber[count])
		
				count++
	}
}			
			console.log(result)
	






