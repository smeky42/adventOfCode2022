import * as fs from 'fs';

const input = fs.readFileSync('input.txt','utf8');

var cycle: number = 0; 
var x: number[] = new Array<number>(); 

x.push(0); 
var value: number = 1;
x.push(value); 
console.log(x.length + " " + value);


input.split(/\r?\n/).forEach(command =>  {
    x.push(value); 
    console.log(x.length + " " + value);
    if(!command.startsWith("noop")) {
        var add: number = +command.split(' ')[1];
        value += add;
        x.push(value); 
        console.log(x.length + " " + value);

    }
});


console.log(x);

console.log(x[20] * 20 + x[60] * 60 + x[100] * 100 + x[140] * 140 + x[180] * 180+ x[220] * 220);

