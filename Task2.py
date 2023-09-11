import math

def absByOlivia(x):
	if x < 0:
		x = x * -1
	return x
	
def formula(a, b):
	return math.sqrt(absByOlivia((a-1)**5)-absByOlivia(b+1))

while True:
	print("Input two values:" )
	a = input()
	if a == 'X':
		print("0") # value for b
		break
	else:
		a = float(a) # cast to float
		b = float(input())
		print(f"Result: {formula(a,b)}")


