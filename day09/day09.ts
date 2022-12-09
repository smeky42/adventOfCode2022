import * as fs from 'fs';

const input = fs.readFileSync('input.txt','utf8');

var hX: number = 0;
var hY: number = 0; 

var tX: number = 0;
var tY: number = 0;

var tVisited = new Set<string>();

function moveH(direction: string, steps: number) {

    // positive x
    if(direction == "R") {
        for(let i = 0; i < steps; i++) {
            hX +=1; 
            moveT();
            console.log( hX + "," + hY + " - " +  tX + "," + tY);
        }
    }

    // positive y
    if(direction == "U") {
        for(let i = 0; i < steps; i++) {
            hY +=1; 
            moveT();
            console.log( hX + "," + hY + " - " +  tX + "," + tY);

        }   
    }

    // negative x
    if(direction == "L") {
        for(let i = 0; i < steps; i++) {
            hX -=1; 
            moveT();
            console.log( hX + "," + hY + " - " +  tX + "," + tY);

        }   
    }

    // negative y
    if(direction == "D") {
        for(let i = 0; i < steps; i++) {
            hY -=1; 
            moveT();
            console.log( hX + "," + hY + " - " +  tX + "," + tY);

        }       
    }

}

function moveT() {
    tVisited.add(tX + "," + tY);
    var betweenX: number = hX-tX;
    var betweenY: number = hY-tY;


    if(Math.abs(betweenX) <= 1 && Math.abs(betweenY) <= 1) {
        return; 
    }
    
    if(betweenX > 0) {
        tX +=1;
    }

    if(betweenX < 0) {
        tX -=1;
    }

    if(betweenY > 0) {
        tY +=1;
    }

    if(betweenY < 0) {
        tY -=1;
    }
}



input.split(/\r?\n/).forEach(line =>  {
    var direction: string = line.split(" ")[0];
    var steps: number = +line.split(" ")[1];

    console.log(direction + "->" + steps);
    moveH(direction, steps);
    console.log("H:" + hX + "," + hY);
    console.log("T:" + tX + "," + tY);
    
});

console.log(tVisited.size)