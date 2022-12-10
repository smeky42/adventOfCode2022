import * as fs from 'fs';

const input = fs.readFileSync('inputSmall.txt','utf8');

var snake: number[][] = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

var tVisited = new Set<string>();

function moveH(direction: string, steps: number) {

    // positive x
    if(direction == "R") {
        for(let i = 0; i < steps; i++) {
            snake[0][0] +=1; 
            moveT(1);
            // console.log( hX + "," + hY + " - " +  tX + "," + tY);
            // console.log("+X")
        }
    }

    // positive y
    if(direction == "U") {
        for(let i = 0; i < steps; i++) {
            snake[0][1] +=1; 
            moveT(1);
            // console.log( hX + "," + hY + " - " +  tX + "," + tY);
            // console.log("+Y")

        }   
    }

    // negative x
    if(direction == "L") {
        for(let i = 0; i < steps; i++) {
            snake[0][0] -=1; 
            moveT(1);
            // console.log( hX + "," + hY + " - " +  tX + "," + tY);
        }   
    }

    // negative y
    if(direction == "D") {
        for(let i = 0; i < steps; i++) {
            snake[0][1] -=1; 
            moveT(1);
            // console.log( hX + "," + hY + " - " +  tX + "," + tY);
        }       
    }

}

function moveT(bodypart: number) {
    var hX = snake[bodypart-1][0];
    var hY = snake[bodypart-1][1];

    var tX = snake[bodypart][0];
    var tY = snake[bodypart][1];

    // console.log(snake[0][0] + "," + snake[0][1]);

    // console.log("T  "+ bodypart + " " + tX + "," + tY);
    
    var betweenX: number = hX-tX;
    var betweenY: number = hY-tY;

    // console.log("Abstand X: " + betweenX + " Y:" + betweenY);

    if(bodypart == 8 ) { 
        console.log("Visited: " + tX + "," + tY)
        tVisited.add(tX + "," + tY);
    }

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

    snake[bodypart][0] = tX;
    snake[bodypart][1] = tY;


    if(bodypart < 8) {
        moveT(bodypart+1);
    }
}



input.split(/\r?\n/).forEach(line =>  {
    var direction: string = line.split(" ")[0];
    var steps: number = +line.split(" ")[1];

    console.log(direction + "->" + steps);
    moveH(direction, steps);
    console.log(snake);
    // console.log("H:" + hX + "," + hY);
    // console.log("T:" + tX + "," + tY);
    
});
console.log(tVisited);
console.log(tVisited.size)