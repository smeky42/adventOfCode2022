import * as fs from 'fs';

const inputMoves = fs.readFileSync('inputMoves.txt','utf8');

/*
        [F] [Q]         [Q]        
[B]     [Q] [V] [D]     [S]        
[S] [P] [T] [R] [M]     [D]        
[J] [V] [W] [M] [F]     [J]     [J]
[Z] [G] [S] [W] [N] [D] [R]     [T]
[V] [M] [B] [G] [S] [C] [T] [V] [S]
[D] [S] [L] [J] [L] [G] [G] [F] [R]
[G] [Z] [C] [H] [C] [R] [H] [P] [D]
 1   2   3   4   5   6   7   8   9 

*/

var crate1:string[] = ["G","D","V","Z","J","S","B"]; 
var crate2:string[] = ["Z","S","M","G","V","P"]; 
var crate3:string[] = ["C","L","B","S","W","T","Q","F"]; 
var crate4:string[] = ["H","J","G","W","M","R","V","Q"]; 
var crate5:string[] = ["C","L","S","N","F","M","D"]; 
var crate6:string[] = ["R","G","C","D"]; 
var crate7:string[] = ["H","G","T","R","J","D","S","Q"]; 
var crate8:string[] = ["P","F","V"]; 
var crate9:string[] = ["D","R","S","T","J"]; 

var crates:Array<string[]> = [crate1,crate2,crate3,crate4,crate5,crate6,crate7,crate8,crate9];

function printCrateTop(crates: Array<string[]>) {
    crates.forEach(crate => {
        console.log(crate[crate.length-1]);
    });
}


function moveCrates(crates: Array<string[]>) {
    inputMoves.split(/\r?\n/).forEach(line =>  { 
        var num: number = +line.match(/\d+/g)![0];
        var from: number = +line.match(/\d+/g)![1] -1;
        var to: number = +line.match(/\d+/g)![2] -1;

        var crate10:string[] = [];
        for(let i = 0; i < num; i++) {
            if(crates[from].length > 0) {
                var crate: string = crates[from].pop()!;
                //crates[to].push(crate);
                crate10.push(crate);

            }        
        }
            crate10 = crate10.reverse();
            crate10.forEach(crate => {
            crates[to].push(crate);
        });

    });

    return crates;
}

printCrateTop(moveCrates(crates));