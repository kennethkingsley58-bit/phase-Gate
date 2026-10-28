def reverse(number):
	result = []
	
	for row in number:
		result.append(row[::-1])
	return result
	
number = [ [8,6], [2,4,5], [3], [1,4,2,8] ]
print(reverse(number))







