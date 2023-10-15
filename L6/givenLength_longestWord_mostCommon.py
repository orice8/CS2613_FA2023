def given_length(s_Input, i_Length):
    lst_Strings = s_Input.split() # split individual wors by whitespace
    lst_Output = [] # empty output list
    for word in lst_Strings:
        if len(word) == i_Length:
            lst_Output.append(word) # save words of requested length
    return lst_Output

def longest_word(s_Input):
    lst_Strings = s_Input.split()
    lst_Lengths = []
    for word in lst_Strings:
        lst_Lengths.append(len(word))
    i_LengthOfLongestWord = (max(lst_Lengths))
    lst_Output = given_length(s_Input, i_LengthOfLongestWord)
    return lst_Output

def most_common(s_Input):
    lst_ASCII = [0] * 26
    for x in s_Input:
        if x.isalpha():
            val = ord(x) - 97
            lst_ASCII[val] = lst_ASCII[val] + 1
    
    maximum = max(lst_ASCII)
    lst_Indices = []
    for letterCount in lst_ASCII:
        if letterCount == maximum:
            lst_Indices.append(lst_ASCII.index(letterCount))
    return print("HERE: ", maximum)

### TEST CASE 1 ###

print(given_length("The white cat and the red fox.", 3))

print(longest_word("Hello CS2613! Python is fun.") == ["CS2613!"])
print(longest_word("Hello CS2613 - Python is fun.") == ["CS2613", "Python"])

print(most_common("My name is…") == ['m'])
print(most_common ("This is!") == ['i', 's'])

### TEST CASE 2 ###

f = open("/home1/ugrads/orice/CS2613/L6/L6_T4_Text.txt", "r")
s_File = f.read()

print(len(given_length(s_File, 5)))
print(longest_word(s_File))
#print(most_common(s_File))
