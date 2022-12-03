import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt','utf8');


function findDuplicate(c1: string, c2: string) {
    for (var i = 0; i < c1.length; i++) {
        if (c2.includes(c1[i])) {
            return c1[i]
        } 
    }

    return "Not Found";
}

function getPriority(s1: string) {
    if (s1 == s1.toUpperCase()) {
        return s1.charCodeAt(0) - 38;
    }
    return s1.charCodeAt(0) - 96;
}

let sum: number = 0;
inputFile.split(/\r?\n/).forEach(line =>  { 
    let lineLength: number = line.length;

    // all lines are even
    let middle: number = lineLength / 2;
    var c1 = line.slice(0, middle);
    var c2 = line.slice(middle);  

    let duplicateLetter: string = findDuplicate(c1, c2);
    let priority: number = getPriority(duplicateLetter);
    //console.log(duplicateLetter + " -> " + priority)
    sum += priority;
});

console.log("Sum: " + sum);
