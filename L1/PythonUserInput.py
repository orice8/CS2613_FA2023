print("Hello! Please input a name: ")
name = input() # get name
	
print("Please input an age: ")
age = int(input()) # get age
	
if age < 0 or age > 122:
	print("Error with age, please input a new age: ")
	age = int(input()) # get new input

# cases for different prompts
if age == 0 or age <= 15:
	print(f"{name} must wait {16-age} more years to get a driver’s license!")
	
if age == 16:
	print(f"Congrats! {name} can get their driver’s license now!")
else:
	print(f"{name} has been eligible for a driver’s license for {age-16} years!")	
