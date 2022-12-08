import * as fs from 'fs';

const input = fs.readFileSync('input.txt','utf8');



function hasBiggerTreeAbove(forest: number[][], row: number, column: number) {

    var sum: number = 0;
    let height: number = forest[row][column];
    for(let i = row - 1; i >= 0; i--) {
        // console.log(forest[i][column]);
        sum+=1;
        if(height <= forest[i][column]) {
            return sum; 
        }
    }

    return sum;
}

function hasBiggerTreeBelow(forest: number[][], row: number, column: number) {

    var sum: number = 0;
    let height: number = forest[row][column];
    for(let i = row +1; i < forest.length; i++) {
        // console.log(forest[i][column]);
        sum+=1;
        if(height <= forest[i][column]) {
            return sum; 
        }
    }

    return sum;
}

function hasBiggerTreeLeft(forest: number[][], row: number, column: number) {

    var sum: number = 0;
    let height: number = forest[row][column];
    for(let i = column-1; i >= 0; i--) {
        // console.log(forest[row][i]);
        sum+=1;
        if(height <= forest[row][i]) {
            return sum; 
        }
    }

    return sum;
}

function hasBiggerTreeRight(forest: number[][], row: number, column: number) {
   
    var sum: number = 0;
    let height: number = forest[row][column];
    for(let i = column +1; i < forest[row].length; i++) {
        // console.log(forest[row][i]);
        sum+=1;
        if(height <= forest[row][i]) {
            return sum; 
        }
    }

    return sum;
}

function hasBiggerTreeAround(forest: number[][], row: number, column: number) {
    return hasBiggerTreeAbove(forest, row, column) *
            hasBiggerTreeBelow(forest, row, column) *
            hasBiggerTreeLeft(forest, row, column) *
            hasBiggerTreeRight(forest, row, column) 
}


var forest: number[][] = new Array();
input.split(/\r?\n/).forEach(line =>  {
    var forestRow: number[] = line.split('').map(Number);
    forest.push(forestRow);
});


var sum: number[] = new Array();
console.log("Rows: " + forest.length);
console.log("Columns: " + forest[0].length);

for(let row = 0; row < forest.length; row++) {
    for(let column = 0; column < forest[row].length; column++) {
        var treeSum: number = hasBiggerTreeAround(forest, row, column);
        console.log(treeSum);
        sum.push(treeSum);
    }
}

console.log("Best Treehouse: " + Math.max.apply(null,sum));
