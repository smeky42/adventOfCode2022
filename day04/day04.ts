import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt','utf8');

function between(elf :number, min :number, max :number) {
    return elf >= min && elf <= max;
}


function contains(elf1: string, elf2: string) {
   var elf1Min: number = +elf1.split("-")[0];
   var elf1Max: number = +elf1.split("-")[1];
   var elf2Min: number = +elf2.split("-")[0];
   var elf2Max: number = +elf2.split("-")[1];

   if(elf1Min >= elf2Min && elf1Max <= elf2Max) {
    return true; 
   }

   if(elf2Min >= elf1Min && elf2Max <= elf1Max) {
    return true; 
   }

   return false;
}

function overlap(elf1: string, elf2: string) {
    var elf1Min: number = +elf1.split("-")[0];
    var elf1Max: number = +elf1.split("-")[1];
    var elf2Min: number = +elf2.split("-")[0];
    var elf2Max: number = +elf2.split("-")[1];

    if( between(elf1Min, elf2Min, elf2Max) ||
        between(elf1Max, elf2Min, elf2Max) ||
        between(elf2Min, elf1Min, elf1Max) ||
        between(elf2Max, elf1Min, elf1Max)) {
        return true;
    }
    return false; 
}


var sumContains: number = 0;
var sumOverlap: number = 0;

inputFile.split(/\r?\n/).forEach(line =>  { 
    var elf1: string = line.split(",")[0];
    var elf2: string = line.split(",")[1];

    if(contains(elf1,elf2)){
        sumContains +=1;
    }

    if(overlap(elf1,elf2)){
        sumOverlap +=1;
    }

});


console.log("Sum Part 1 Contains: " + sumContains);
console.log("Sum Part 2 Overlap: " + sumOverlap);

