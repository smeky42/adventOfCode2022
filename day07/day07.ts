import * as fs from 'fs';

const input = fs.readFileSync('input.txt','utf8');

let path: string = "/";

function startsWithNumber(str: string) {
    return /^\d/.test(str);
}


var folderSum: number = 0;
let folderSize = new Map<string,number>([]);
input.split(/\r?\n/).forEach(line =>  {
    
    if(line.startsWith("$ ls")) {
        folderSum = 0;
    }

    if(startsWithNumber(line)) {
        var size: number = +line.split(" ")[0];
        // console.log("+" + size);
        folderSum += size;
    }

    if(line.startsWith("$ cd")) {
        if(folderSum > 0) {
            // console.log(path + " " + folderSum );
            folderSize.set(path, folderSum);
            folderSum = 0;
        }

        if(line == "$ cd ..") {
            path = path.substring(0, path.lastIndexOf("/"));//replace(/\/[^\/]+$/,"");
        } else if(line == "$ cd /") {
            path = "";
        } else {
            var newFolder: string = line.replace("$ cd ","");
            path += "/" + newFolder ;
            if(!folderSize.has(path)){
                folderSize.set(path, 0);
            }
        }
        // console.log(path);
    };


});


let folderSumSize = new Map<string,number>([]);

folderSize.forEach( (size, folder) => {
    let folderSum: number = size; 

    // console.log("-->" + folder);
    // console.log("+" + size);
    folderSize.forEach( (innerSize, innerFolder) => {
        if(innerFolder.includes(folder + "/")) {
            // console.log(innerFolder + " is part of " + folder);
            // console.log(folderSum + "+" + innerSize);
            folderSum += innerSize;
            // console.log(folderSum);
        }
    });

    // console.log("=" + folderSum);
    folderSumSize.set(folder, folderSum);

} ); 

var sum: number = 0;
folderSumSize.forEach((size, folder) => {
    if(size <= 100000) {
        // console.log(folder + " " + size);
        sum += size; 
    }
});  

console.log("Summe:" + sum);

var totalSpace: number = 70000000;
var neededSpace: number = 30000000;
var smallestPossibleFolder = "";

sum = 0;
folderSize.forEach((size, folder) => {
    sum += size; 
}); 

console.log("Space used: " +  sum);
var space: number = - totalSpace + sum + neededSpace; 
console.log("Space to be freed: " +  space);


folderSumSize.forEach((size, folder) => {
    if(size >= space) {
        //if(spaceFreed <= size) {
            console.log(folder + " " + size);
        //}
    }
});  


