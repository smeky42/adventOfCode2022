import * as fs from 'fs';

const input = fs.readFileSync('input.txt','utf8');


function charactersUnique(message: string) {
    return new Set(message).size == message.length;
}


var inputLength: number = input.length;


for(let i = 0; i < inputLength-4; i++) {
    var message: string = input.substring(i,i+4);
    if(charactersUnique(message)) {
        console.log(i+4);
        break;
    }
}