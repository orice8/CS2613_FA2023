const fs = require('fs');

//const filePath = 'Q1Input.txt';
const filePath = 'DataInput.txt';
const outputFilePath = 'Q2Output.txt';

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function takeCommand(command, lst_Values){
    if (command === "SUM"){
        let SUM_Result = 0;
        lst_Values.forEach((element) => {
            SUM_Result += element;
        });
        return SUM_Result;
    } else if (command === "AVG") {
        let SUM_Result = 0;
        lst_Values.forEach((element) => {
            SUM_Result += element;
        });
        let AVG_Result = (SUM_Result/(lst_Values.length));
        return AVG_Result;
    } else if (command === "MAX") {
        MAX_Result = lst_Values[0];
        for (let i = 1; i < lst_Values.length; i++){
            if (lst_Values[i] >= MAX_Result) {
                MAX_Result = lst_Values[i];
            }
        }
        return MAX_Result;
    } else if (command == "MIN"){
        MIN_Result = lst_Values[0];
        for (let i = 1; i < lst_Values.length; i++){
            if (lst_Values[i] <= MIN_Result) {
                MIN_Result = lst_Values[i]
            }
        }
        return MIN_Result;
    } else if (command === "FXP") {
        let FXP_Result = [];
        lst_Values.forEach((element) => {
            let approxVal = Math.exp(50 * element);
            FXP_Result.push(approxVal);
        });
        return FXP_Result;
    } else if (command === "FPO") {
        let FPO_Result = [];
        let lambdaVal = 50;
        lst_Values.forEach((element) => {
            let poisson = (lambdaVal ** element) * Math.exp(-lambdaVal) / factorial(element);
            FPO_Result.push(poisson);
        });
        return FPO_Result;
    } else if (command === "FSN") {
        let FSN_Result = [];
        lst_Values.forEach((element) => {
            let tempResult = 0;
            for (let i = 0; i < 10; i++) {
                let termResult = ((-1)**i) * (element**(2*i+1)) / factorial(2*i+1);
                tempResult += termResult;
            }
            tempResult *= 50;
            FSN_Result.push(tempResult);
        });
        return FSN_Result;
    } else if (command === "FCS") {
        let FCS_Result = [];
        lst_Values.forEach((element) => {
            let tempResult = 0;
            for (let i = 0; i < 10; i++) {
                let termResult = (((-1)**i) * (element ** (2*i)) / factorial(2*i));
                tempResult += termResult;
            }
            tempResult *= 50;
            FCS_Result.push(tempResult);
        });
        return FCS_Result;
    } else {
        console.error("ERROR: Command Not Found.");
        return null;
    }
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.split('\n');
    const results = [];

    let i = 0;
    while (i < lines.length) { //for all lines/groups:
        const s_Command = lines[i].trim(); //get command and make it read-able
        i++; //increment to next in text doc
        const i_NumberOfValues = parseInt(lines[i]); //get number of values to evaluate
        i++; //increment to next in text doc
        const lst_Values = lines.slice(i, i+i_NumberOfValues).map(parseFloat); //get the small leist of values to evaluate and make the floats
        i += i_NumberOfValues; //increment by the number of values just extracted

        const result = takeCommand(s_Command, lst_Values); //get command results
        results.push(result); // push result for single command and continue
    }

    const dataToWrite = results.join('\n');

    fs.writeFile(outputFilePath, dataToWrite, (err) => {
        if (err) {
            console.error('ERROR: Could Not Write to File:', err);
        } else {
            console.log(dataToWrite);
            console.log('File Written Successfully.');
        }
    });
});