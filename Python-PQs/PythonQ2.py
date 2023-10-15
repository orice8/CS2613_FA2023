import numpy as np
import math

def switch(command, lst_Values):
    if command == "SUM":
        SUM_Result = 0
        for h in lst_Values:
            SUM_Result += h
        return SUM_Result
    
    elif command == "AVG":
        AVG_Result = 0
        x = 0
        for i in lst_Values:
            x += i
        AVG_Result = x/(len(lst_Values))
        return AVG_Result
    
    elif command == "MAX":
        MAX_Result = lst_Values[0]
        for j in (range(len(lst_Values))):
            if lst_Values[j] >= MAX_Result:
                MAX_Result = lst_Values[j]
        return MAX_Result
    
    elif command == "MIN":
        MIN_Result = lst_Values[0]
        for k in (range(len(lst_Values))):
            if lst_Values[k] <= MIN_Result:
                MIN_Result = lst_Values[k]
        return MIN_Result
    
    elif command == "FXP":
        FXP_Result = []
        for l in lst_Values:
            approxVal = np.exp(50 * l) 
            FXP_Result.append(approxVal)
        return FXP_Result
    
    elif command == "FPO":
        FPO_Result = []
        lambdaVal = 50
        for m in lst_Values:
            poisson = (lambdaVal ** m) * np.exp(-lambdaVal) / math.factorial(int(m))
            FPO_Result.append(poisson)
        return FPO_Result
    
    elif command == "FSN":
        FSN_Result = []
        for n in lst_Values:
            temp = n
            tempResult = 0
            for o in range(10):
                termResult = (-1**o) * (temp**(2*o+1)) / math.factorial(2*o+1)
                tempResult += termResult
            tempResult *= 50
            FSN_Result.append(tempResult)
        return FSN_Result
    
    elif command == "FCS":
        FCS_Result = []
        for p in lst_Values:
            tempResult2 = 0
            for q in range(10):
                termResult2 = (((-1)**q) * (p ** (2*q)) / math.factorial(2*q))
                tempResult2 += termResult2
            tempResult2 *= 50
            FCS_Result.append(tempResult2)
        return FCS_Result
    
    else: # base case
        return "ERROR: Command Not Found."

fileInput = open('DataInput.txt', 'r')
Lines = fileInput.readlines()

s_Command = str(Lines[0]).strip()
i_ValNumber = int(Lines[1])
lst_InputValues = []
# Strips the newline character
for line in Lines[2:]:
    lst_InputValues.append(float(line.strip())) # always prepare for floats given diverse calculation types

results = switch(s_Command, lst_InputValues)
#print(results) # this is where you would output file
print(results)
#fileOutput = open('DataOutput.txt', 'w')
#fileOutput.writelines(str(results))
#fileOutput.close()