import * as fs from 'fs';

const input = fs.readFileSync('input.txt','utf8');

class Monkey {
    id!: number; 
    items!: number[];
    operation!: string; 
    test!: number;
    throwTrue!: number; 
    throwFalse!: number; 
    inspect: number = 0; 
}

var monkeys: Monkey[] = new Array();
input.split(/Monkey/g).forEach( monkeyBlock =>  {
    var monkey: Monkey = new Monkey();

    monkeyBlock.split(/\r?\n/).forEach(line => {
        if(/^.\d/.test(line)) {
            monkey.id = +line.replace(":","");
        }
        if(line.startsWith("  Starting")) {
            monkey.items = line.split(": ")[1].split(", ").map(Number);
        }
        if(line.startsWith("  Operation")){
            monkey.operation = line.split(": ")[1].replace("new =", "return ");
        }
        if(line.startsWith("  Test:")) {
            monkey.test = +line.split("by ")[1];
        }
        if(line.startsWith("    If true:")) {
            monkey.throwTrue = +line.split("monkey ")[1];
        }
        if(line.startsWith("    If false:")) {
            monkey.throwFalse = +line.split("monkey ")[1];
        }
    });

    if(monkey.id != null ) {
        monkeys.push(monkey);
    }
});

for(let i = 0; i < 20; i++) {
    monkeys.forEach(monkey => {
        // console.log(monkey.id);
        // console.log(monkey.items);
    
        monkey.items.forEach(item => {
            // console.log(item);
            monkey.inspect += 1; 
            var operation = Function("old", monkey.operation)
            var operationLevel: number = operation(item);
            var operationLevel = Math.floor(operationLevel / 3);
    
            // console.log(operationLevel);

            if((operationLevel%monkey.test) == 0) {
                monkeys[monkey.throwTrue].items.push(operationLevel);
                // console.log("Worry Level " + operationLevel + " is thrown to " +  monkey.throwTrue);
            } else {
                monkeys[monkey.throwFalse].items.push(operationLevel);
                // console.log("Worry Level " + operationLevel + " is thrown to " +  monkey.throwFalse);
            }
        });
        monkey.items = [];
    });
}

var rounds: number[] = new Array();
monkeys.forEach(monkey => {
    console.log(monkey.inspect);
    rounds.push(monkey.inspect);
});


rounds.sort(function(a, b) {
    return b - a;
  });

console.log(rounds[0] + " * " + rounds[1])
console.log(rounds[0] * rounds[1])