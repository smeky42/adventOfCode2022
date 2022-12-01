import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt','utf8');

let calArray: number[] = [0];

inputFile.split(/\r?\n\r?\n/).forEach(line =>  {
    let sum: number = 0;

    line.split(/\r?\n/).forEach(calorie =>  {
        sum += Number(calorie);
    });
    calArray.push(sum);

});

calArray = calArray.sort((n1,n2) => n2 - n1);
let calLeaders = calArray[0] + calArray[1] + calArray[2];

console.log(calLeaders);
