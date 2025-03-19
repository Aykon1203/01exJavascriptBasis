'use strict';

const getal = prompt("Geef een geheel getal: ");
let som=0;

for(let i=0; i<=getal;i++){
    if(i%3==0)
        som+=i;
    if(i%5==0)
        som+=i;
}

console.log(`Het getal is ${getal}. De som van de veelvouden is ${som}`);