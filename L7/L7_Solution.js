// Importing 'fs' module
const fs = require("fs");
 
let distances = [0, 0, 0];
try {
        
    let iteration = 1;
    while(true){
        let fileName = "calculations" + iteration + ".json";
        let data = fs.readFileSync(fileName, 'utf8');
        let jsonObj = JSON.parse(data);
        
        let trueVal = parseFloat(jsonObj.data.calculations[0].calc);

        let aVal = parseFloat(jsonObj.data.calculations[1].calc);
        distances[0] += Math.abs(aVal - trueVal);

        let tVal = parseFloat(jsonObj.data.calculations[2].calc);
        distances[1] += Math.abs(tVal - trueVal);

        let zVal = parseFloat(jsonObj.data.calculations[3].calc);
        distances[2] += Math.abs(zVal - trueVal);

        iteration = iteration + 1;
    }
                
} 
catch (err) {
    console.error(distances);
    let highestPos = 0;
    let lowestPos = 0;
    for(let i = 1; i < distances.length; i++){
        if(distances[i] > distances[highestPos]){
            highestPos = i;
        }

        if(distances[i] < distances[lowestPos]){
            lowestPos = i;
        }
    }

    let middlePos = 0;
    if((highestPos == 0 && lowestPos == 1) || (highestPos == 1 && lowestPos == 0)){
        middlePos = 2;
    }
    else if((highestPos == 2 && lowestPos == 0) || (highestPos == 0 && lowestPos == 2)){
        middlePos = 1;
    }
    let names = ["Abby", "Tyson", "Zack"];

    console.log("1.\t" + names[lowestPos] + "\t("+ distances[lowestPos] +")");
    console.log("2.\t" + names[middlePos] + "\t("+ distances[middlePos] +")");
    console.log("3.\t" + names[highestPos] + "\t("+ distances[highestPos] +")");
}

/*
const geeksData = { title: "Node",
        article: "geeksforgeeks" };

// Convert JavaScript object into JSON string
const geeksJSON = JSON.stringify(geeksData);
 
// Convert JSON string into object
const geeksObject = JSON.parse(geeksJSON);
console.log(geeksObject.article);
 
// Adding more properties to JSON object
geeksObject.stack = "js";
geeksObject.difficulty = 1;
 
// Converting js object into JSON string
// and writing to data.json file
const dataJSON = JSON.stringify(geeksObject);
fs.writeFileSync("data.json", dataJSON);
console.log(geeksObject);
*/