'use strict';

let zin = prompt("Geef een zin in: ");
let index = zin.lastIndexOf(' ');

while (index>=0){
    console.log(zin.substring(index + 1, zin.length))
    zin = zin.substring(0, index); 
    index =  zin.lastIndexOf(' ');  
}

console.log(zin)
