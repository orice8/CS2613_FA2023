#CS2613 
#Fall 2023
#L6-T3/4 - Answer

def given_length(sent, length):
	words = sent.split()
	to_return = []
	for word in words:
		if(len(word) == length):
			to_return.append(word)
	return to_return


def longest_word(sent):
	words = sent.split()
	longest = 1
	for word in words:
		if(len(word) > longest):
			longest = len(word)
	return given_length(sent, longest)


def most_common(sent):
	freq = [0] * 26
	sent = sent.lower()
	for letter in sent:
		if(ord(letter) >= 97 and ord(letter) <= 122):
			pos = ord(letter) - 97
			freq[pos] = freq[pos] + 1
	common = 0
	for i in range(len(freq)):
		if(common < freq[i]):
			common = freq[i]
	letters = []
	for i in range(len(freq)):
		if(common == freq[i]):
			letters.append(chr(i + 97))
	return letters


fin = open('L6_T4_Text.txt', 'r')
text = ""
for line in fin:
	text = text + " " + line

print(len(given_length(text, 5)))
print(most_common(text))
print(longest_word(text))

fin.close()
