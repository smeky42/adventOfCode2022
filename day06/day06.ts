import * as fs from 'fs';

const input = fs.readFileSync('input.txt','utf8');


function charactersUnique(message: string) {
    return new Set(message).size == message.length;
}


var inputLength: number = input.length;
var uniqueCount: number = 14;

for(let i = 0; i < inputLength-uniqueCount; i++) {
    var message: string = input.substring(i,i+uniqueCount);
    if(charactersUnique(message)) {
        console.log(i+uniqueCount);
        break;
    }
}