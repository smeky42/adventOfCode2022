// Rock     A - X   1
// Paper    B - Y   2
// Scissors C - Z   3

import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt','utf8');

function decrypt(input: string) {
    let translatorMap = new Map<string,string>([
        ["A","R"],
        ["B","P"],
        ["C","S"],
        ["X","R"],
        ["Y","P"],
        ["Z","S"]
    ]);
    return translatorMap.get(input);
}

function decryptPart2(elf: string, player: string) {
    let translatorMap = new Map<string,string>([
        ["RX","S"], ["RY","R"], ["RZ","P"],
        ["PX","R"], ["PY","P"], ["PZ","S"],
        ["SX","P"], ["SY","S"], ["SZ","R"]        
    ]);
    return translatorMap.get(elf + player);
}

function pointsForChoosing(input: string) {
    let choosingMap = new Map<string,number>([
        ["R",1],
        ["P",2],
        ["S",3]
    ]);
    return choosingMap.get(input);
}

function pointsForGambling(p1: string, p2: string) {
    let gamblingMap = new Map<string,number>([
        ["RS",6],  ["RR",3], ["RP",0],
        ["PR",6],  ["PP",3], ["PS",0],
        ["SP",6],  ["SS",3], ["SR",0]
    ]);
    return gamblingMap.get(p1 + p2);
}

function pointsFoPlayer(elf: string, player: string) { 
    return pointsForChoosing(player)! + pointsForGambling(player, elf)!; 
}


let totalPart1: number = 0;
let totalPart2: number = 0;

inputFile.split(/\r?\n/).forEach(line =>  {
    let elf: string = line.split(" ")[0];
    let player: string = line.split(" ")[1];
    elf = decrypt(elf)!;
    player = decrypt(player)!;
    
    totalPart1 += pointsFoPlayer(elf, player);

    player = decryptPart2(elf, line.split(" ")[1])!;
    totalPart2 += pointsFoPlayer(elf, player);
});

console.log("Total Score Part1: " + totalPart1);
console.log("Total Score Part1: " + totalPart2);