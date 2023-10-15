def clean_token(inputString):
    finalString = '' # empty string for alphabetic letters
    for char in inputString:
        if char.isalpha(): # if True
            char = char.lower() # make lowercase
            finalString += char # add to list
    return finalString

def repeat_letter(inputString):
    cleanString = clean_token(inputString) #  get clean string
    duplicateLettersList = []
    for letter in cleanString:  # inspect one letter at a time in clean string
        if cleanString.count(letter) > 1 and letter not in duplicateLettersList: # if count of a letter in greater than 1 and the letter isn't already in the duplicate letter list...
            duplicateLettersList += letter # add letter to duplicate letter list
    if len(duplicateLettersList) > 0:
        return True
    else:
        return False

def end_start_char(inputString1, inputString2):
    cleanString1 = clean_token(inputString1)
    cleanString2 = clean_token(inputString2)

    if len(cleanString1) == 0 or len(cleanString2) == 0: # check for empty string on either side
        return False
    if cleanString1[-1] == cleanString2[0]: # check character at end of first string and start of second string
        return True
    else: # return false for all other cases
        return False

# test cases
print("Input a sentence for statistics:")
x = input()

cleanString = clean_token(x)
print(f"Total number of alphabetic characters: {len(cleanString)}")

stringList = x.split()
count = 0
for word in stringList:
    if repeat_letter(word) == True:
        count += 1
print(f"Total number of words with repeated alphabetic characters: {count}")

end_start_count = 0
for i in range(len(stringList)-1):
    if end_start_char(stringList[i], stringList[i+1]) == True:
        end_start_count += 1
print(f"Total number of end-start letter matches: {end_start_count}")